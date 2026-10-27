export function filterRooms(rooms,guests=0,budget=0){
 return rooms.filter(r=>(!Number(guests)||r.capacity>=Number(guests))&&(!Number(budget)||r.price<=Number(budget)));
}
function dateValue(value){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(value||''))return NaN;
 const time=Date.parse(value+'T00:00:00Z');
 return Number.isFinite(time)&&new Date(time).toISOString().slice(0,10)===value?time:NaN;
}
export function validateBooking(values,room,today){
 const errors={};const start=dateValue(values.checkin);const end=dateValue(values.checkout);
 if(!(values.name||'').trim())errors.name='Vui lòng nhập họ và tên.';
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((values.email||'').trim()))errors.email='Vui lòng nhập email hợp lệ.';
 if(!/^\+?[\d\s().-]{9,20}$/.test((values.phone||'').trim())||(values.phone||'').replace(/\D/g,'').length<9)errors.phone='Vui lòng nhập số điện thoại hợp lệ.';
 if(!Number.isFinite(start)||start<dateValue(today))errors.checkin='Chọn ngày nhận phòng từ hôm nay trở đi.';
 if(!Number.isFinite(end)||!Number.isFinite(start)||end<=start)errors.checkout='Ngày trả phòng phải sau ngày nhận phòng.';
 const guests=Number(values.guests);
 if(!Number.isInteger(guests)||guests<1||guests>room.capacity)errors.guests=`Phòng này phù hợp từ 1 đến ${room.capacity} khách.`;
 return errors;
}
export function bookingSummary(room,checkin,checkout){
 const nights=(dateValue(checkout)-dateValue(checkin))/86400000;
 return Number.isFinite(nights)&&nights>0?{nights,total:nights*room.price}:{nights:0,total:0};
}
