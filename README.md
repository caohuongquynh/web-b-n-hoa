# Willow Lea (Fleur) - Shop Hoa Tươi Cao Cấp 🌸

Dự án website cửa hàng hoa tươi trực tuyến (Flower Shop) với giao diện hiện đại, sang trọng, tối ưu hóa trải nghiệm người dùng cho cả thiết bị di động và máy tính.

## 🌟 Tính Năng Nổi Bật

- **Giao diện Responsive**: Tương thích hoàn hảo trên các thiết bị (Mobile, Tablet, Desktop).
- **Quản lý Giỏ hàng (Cart)**: Thêm, sửa, xóa sản phẩm trong giỏ hàng (Sử dụng `localStorage` để lưu trữ dữ liệu).
- **Danh sách Yêu thích (Wishlist)**: Lưu lại các sản phẩm yêu thích của người dùng (Sử dụng `localStorage`).
- **Hiệu ứng Animation**: Tích hợp hiệu ứng cuộn trang (AOS - Animate On Scroll) tự custom mượt mà, nhẹ nhàng.
- **Trải nghiệm mua sắm**: Hệ thống danh mục đa dạng (Hoa hồng, Tulip, Hướng dương...), xem chi tiết sản phẩm, lọc theo đánh giá và mức giá.
- **Thông báo (Toast Notifications)**: Hiển thị thông báo thân thiện khi người dùng thao tác (thêm vào giỏ hàng, đăng ký nhận tin...).

## 🛠️ Công Nghệ Sử Dụng

Dự án được xây dựng hoàn toàn bằng các công nghệ web cơ bản, không phụ thuộc vào các framework nặng, giúp trang web load nhanh và dễ dàng tùy biến:
- **HTML5**: Cấu trúc trang web chuẩn SEO.
- **CSS3**: Vanilla CSS, sử dụng CSS Variables, Flexbox & CSS Grid cho layout.
- **JavaScript (Vanilla JS)**: Xử lý logic giỏ hàng, yêu thích, DOM manipulation và hiệu ứng cuộn.
- **Font Awesome 6**: Thư viện icon.
- **Google Fonts**: Sử dụng font chữ hiện đại, thanh lịch.

## 📂 Cấu Trúc Thư Mục

```text
flower-shop/
├── index.html            # Trang chủ
├── about.html            # Trang giới thiệu cửa hàng
├── products.html         # Trang danh sách sản phẩm & danh mục
├── product-detail.html   # Trang chi tiết một sản phẩm
├── cart.html             # Trang quản lý giỏ hàng
├── style.css             # File stylesheet chính (chứa toàn bộ UI/UX)
├── app.js                # File JavaScript chính (chứa Data sản phẩm, logic Cart, Wishlist...)
└── assets/               # Thư mục chứa hình ảnh tĩnh (nếu có)
```

## 🚀 Hướng Dẫn Chạy Dự Án

Vì đây là một dự án thuần Frontend (Static Web), bạn không cần cài đặt môi trường Node.js hay Database phức tạp.

1. Clone hoặc tải dự án về máy.
2. Mở dự án bằng **Visual Studio Code** (hoặc bất kỳ Editor nào bạn thích).
3. Sử dụng extension **Live Server** (khuyên dùng) để chạy dự án:
   - Click chuột phải vào file `index.html` -> Chọn **Open with Live Server**.
   - Việc dùng Live Server giúp các tính năng như `URLSearchParams` (để lấy ID sản phẩm) và `localStorage` hoạt động ổn định nhất.
4. Trải nghiệm trực tiếp trên trình duyệt tại `http://localhost:5500`.

## 🎨 Ghi chú về Dữ liệu

Dữ liệu sản phẩm (tên, giá, hình ảnh, mô tả...) hiện đang được mock (giả lập) cứng trong mảng `PRODUCTS` tại file `app.js`. Hình ảnh được sử dụng từ nguồn Unsplash để đảm bảo chất lượng sắc nét. Bạn có thể dễ dàng thay thế mảng này bằng việc fetch dữ liệu từ API thực tế nếu muốn phát triển lên Fullstack.
