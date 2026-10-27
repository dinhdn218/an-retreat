import test from 'node:test';
import assert from 'node:assert/strict';
import {filterRooms, validateBooking, bookingSummary} from '../dist/logic.mjs';

const room={id:'forest',capacity:2,price:1800000};
const valid={name:'Nguyễn An',email:'an@example.com',phone:'0901234567',checkin:'2026-11-10',checkout:'2026-11-12',guests:'2'};
test('valid booking passes and two nights cost 3.6 million',()=>{
 assert.deepEqual(validateBooking(valid,room,'2026-10-27'),{});
 assert.deepEqual(bookingSummary(room,'2026-11-10','2026-11-12'),{nights:2,total:3600000});
});
test('past, impossible, same and reversed dates are rejected',()=>{
 for(const dates of [{checkin:'2026-10-26'},{checkin:'2026-02-31'},{checkout:'2026-11-10'},{checkout:'2026-11-09'},{checkin:''}]){
  const errors=validateBooking({...valid,...dates},room,'2026-10-27');
  assert.ok(errors.checkin||errors.checkout);
 }
});
test('missing name, invalid email and phone have field errors',()=>{
 const errors=validateBooking({...valid,name:' ',email:'bad',phone:'abc'},room,'2026-10-27');
 assert.ok(errors.name);assert.ok(errors.email);assert.ok(errors.phone);
});
test('capacity rejects zero, fractions, nonnumeric and too many guests',()=>{
 for(const guests of ['0','1.5','abc','3']) assert.ok(validateBooking({...valid,guests},room,'2026-10-27').guests);
});
test('budget and capacity filters combine including no matches',()=>{
 const rooms=[room,{id:'hill',capacity:4,price:2800000},{id:'family',capacity:6,price:4200000}];
 assert.deepEqual(filterRooms(rooms,4,3000000).map(r=>r.id),['hill']);
 assert.deepEqual(filterRooms(rooms,6,3000000),[]);
 assert.equal(filterRooms(rooms,0,0).length,3);
});
