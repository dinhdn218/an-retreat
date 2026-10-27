# AN Retreat

Website concept portfolio bằng tiếng Việt cho thương hiệu homestay giả định. Không có đặt phòng, gửi email hoặc thanh toán thực tế.

## Chạy trên máy

Cài Node.js rồi chạy `npm start` trong thư mục này. Mở http://127.0.0.1:4173. Không cần cài thư viện.

Chạy kiểm thử: `npm test`.

## Cấu trúc

- `dist/index.html`: khung website, điều hướng, footer, thư viện ảnh.
- `dist/styles.css`: giao diện responsive và chuyển động.
- `dist/app.mjs`: nội dung, phòng, trải nghiệm và các luồng tương tác.
- `dist/logic.mjs`: lọc phòng, kiểm tra form, tính số đêm và tạm tính.
- `dist/assets/`: ảnh Unsplash minh họa và favicon.

Các trang dùng hash routes để hoạt động trên static hosting. Dữ liệu form chỉ tồn tại trong phiên trang đang mở; không truyền thông tin tới máy chủ. Google Fonts được tải từ Google, ảnh được phục vụ từ thư mục assets tại website.

## Dùng trong portfolio

Ghi rõ “Dự án concept tự thực hiện”. Không sử dụng giá mẫu, hình ảnh hay nội dung trải nghiệm như thông tin về một cơ sở lưu trú thật. Các ảnh minh họa không mô tả một địa điểm duy nhất.

Ảnh: Unsplash (forest: 1473448912268-2022ce9509d8; cabin: 1449158743715-0a90ebb6d2d8; room: 1611892440504-42a792e24d32; suite: 1600210492486-724fe5c67fb0; tea: 1544787219-7f47ccb76574; yoga: 1506126613408-eca07ce68773; dining: 1414235077428-338989a2e8c0; trail: 1441974231531-c6227db76b6e).
