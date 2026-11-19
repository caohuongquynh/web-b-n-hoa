// ===========================
//  FLEUR — Product Data
// ===========================

// Ảnh thật từ Unsplash — dùng photo ID cụ thể, ổn định và không cần API key.
// Format: https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w=600&h=700&q=80
const PRODUCTS = [
  {
    id: 1,
    name: "Hồng Nhung Tình Yêu",
    category: "Roses",
    occasion: "Love",
    price: 450000,
    oldPrice: 580000,
    rating: 4.9,
    reviews: 124,
    badge: "best",
    description: "Bó hoa hồng đỏ thắm tươi được tuyển chọn kỹ từ những nông trại hữu cơ. Mỗi bông hồng đều ngát hương và tươi lâu tới 7 ngày.",
    images: [
      "https://vuonhoatuoi.vn/wp-content/uploads/2025/03/y-nghia-hoa-hong-nhung-500x500.webp",
      "https://bizweb.dktcdn.net/100/164/753/files/bo-hoa-tinh-yeu-hb1026.jpg?v=1506246934639",
      "https://hoayeuthuong.com/ShowTopicSubImage.aspx?id=36367",
      "https://images.unsplash.com/photo-1455582916367-25f75bfc6710?auto=format&fit=crop&w=600&h=700&q=80"
    ],
    sizes: ["Nhỏ (5 bông)", "Vừa (12 bông)", "Lớn (24 bông)"],
    inStock: true
  },
  {
    id: 2,
    name: "Oải Hương Mộng Mơ",
    category: "Lavender",
    occasion: "Birthday",
    price: 320000,
    oldPrice: null,
    rating: 4.7,
    reviews: 86,
    badge: "new",
    description: "Hoa oải hương Provence nhập khẩu, mang đến mùi hương thư giãn tuyệt vời. Hoàn hảo cho không gian phòng ngủ.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9tkaleLgvAINmsFfvm-BFSGmG0k8JDbeoA&s",
      "https://otrip.vn/wp-content/uploads/2025/05/1-Tour-Nhat-Ban-Hoa-Oai-Huong.jpg",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&h=700&q=80"
    ],
    sizes: ["Nhỏ", "Vừa", "Lớn"],
    inStock: true
  },
  {
    id: 3,
    name: "Hướng Dương Rực Rỡ",
    category: "Sunflowers",
    occasion: "Friendship",
    price: 280000,
    oldPrice: null,
    rating: 4.8,
    reviews: 203,
    badge: "best",
    description: "Hướng dương rực rỡ mang lại nguồn năng lượng tích cực và niềm vui mỗi ngày. Tươi trong 10-14 ngày.",
    images: [
      "https://canhdonghoatuoi.com/wp-content/uploads/2023/07/300-17-1.png",
      "https://hoatuoiangel.com/upload/elfinder/z6781501694561_577742759321aa93b23b60771f8b42e7.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOVpjPQYn-_fto_Np260DzU-B35mVW-M9ag&s",
      "https://storage.googleapis.com/cdn_dlhf_vn/public/products/AFFM/AFFMIXD643/1727244127_66f3a75f761bd.jpg"
    ],
    sizes: ["5 bông", "10 bông", "20 bông"],
    inStock: true
  },
  {
    id: 4,
    name: "Loa Kèn Trắng Tinh Khôi",
    category: "Lilies",
    occasion: "Wedding",
    price: 520000,
    oldPrice: 650000,
    rating: 4.9,
    reviews: 157,
    badge: "sale",
    description: "Hoa loa kèn trắng tinh khôi, biểu tượng cho sự thuần khiết và sang trọng. Lựa chọn hoàn hảo cho đám cưới.",
    images: [
      "https://hoatuoihoamy.com/wp-content/uploads/2022/10/Hinh-24.jpg",
      "https://hoayeuthuong.com/ShowTopicSubImage.aspx?id=37397",
      "https://cdn.litiflorist.com/upload/1743746232610.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4EEID1TccT-VI6e3_tJA3sKYS-z3Os1d_g&s"
    ],
    sizes: ["Bó nhỏ", "Bó vừa", "Bó lớn"],
    inStock: true
  },
  {
    id: 5,
    name: "Tulip Hồng Hà Lan",
    category: "Tulips",
    occasion: "Birthday",
    price: 380000,
    oldPrice: null,
    rating: 4.6,
    reviews: 92,
    badge: "new",
    description: "Hoa tulip hồng từ vườn Hà Lan, thanh lịch và nữ tính. Mỗi bó được thiết kế tinh tế bởi các florist chuyên nghiệp.",
    images: [
      "https://hoahongsi.com/Upload/product/tulip-hong-7534.jpg",
      "https://hoathangtu.com/wp-content/uploads/2023/05/IMG_7045-scaled.jpg",
      "https://product.hstatic.net/200000015764/product/z5198597547556_04afb30b86a0c7b97609910af4d2677c_780ff65486234e39bfefb2a704dfa340_master.jpg",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/442/027/products/img-3669-jpg.jpg?v=1723713087120"
    ],
    sizes: ["5 bông", "10 bông", "15 bông"],
    inStock: true
  },
  {
    id: 6,
    name: "Hoa Anh Đào Nhật Bản",
    category: "Seasonal",
    occasion: "Special",
    price: 680000,
    oldPrice: 850000,
    rating: 5.0,
    reviews: 48,
    badge: "sale",
    description: "Hoa anh đào Nhật Bản mùa xuân, giới hạn theo mùa. Vẻ đẹp phù du và lãng mạn nhất trong năm.",
    images: [
      "https://lh6.googleusercontent.com/proxy/C9Vq6tEunxrotLt-qaUKMafm4zrDsoXI4AvWAt5TJupUjMEfFDfWnETTF1WoSfpc84YQA_gCHRNlMf7EGyMvQL6-QfJEc65OCs74hm_fiJ4aTVlSy2ME0g63mu_dUiCNs3RzHA",
      "https://cdn.litiflorist.com/upload/1674120862141.png",
      "https://dulichnhatban.net/wp-content/uploads/2025/10/Somei-Yoshino.webp",
      "https://transviet.com.vn/images/Khuyen-Mai/Pictures/CNDL%202018/NHAT%20BAN/Y%20nghia%20hoa%20sakura/CNDL_Nhat%20Ban_y%20nghia%20sakura_transviet_sakura%20hong_9.png"
    ],
    sizes: ["Mini", "Tiêu chuẩn", "Cao cấp"],
    inStock: true
  },
  {
    id: 7,
    name: "Cúc Dại Đồng Nội",
    category: "Mixed",
    occasion: "Everyday",
    price: 220000,
    oldPrice: null,
    rating: 4.5,
    reviews: 178,
    badge: null,
    description: "Bó hoa cúc dại tươi sáng, lan tỏa cảm giác vui tươi và hồn nhiên. Phù hợp tặng mọi dịp trong ngày.",
    images: [
      "https://hoatuoi360.vn/uploads/file/Cuc%20tana/hoatuoi360-bo%20cuc%20tana%20dep%20xinh%202.jpg",
      "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/12/6/cuc-dai-trang-cay-canh-t13-17335162543611675711222.jpg",
      "https://shophoasunny.vn/wp-content/uploads/2022/04/HOA-CUC-DAI-CO-DAC-DIEM-GI-KHAC-BIET.jpg",
      "https://flowersight.com/wp-content/uploads/2023/08/bo-hoa-cuc-hoa-mi-xinh.jpg"
    ],
    sizes: ["Nhỏ", "Vừa", "Lớn"],
    inStock: true
  },
  {
    id: 8,
    name: "Lan Hồ Điệp Cao Quý",
    category: "Orchids",
    occasion: "Luxury",
    price: 780000,
    oldPrice: null,
    rating: 4.8,
    reviews: 65,
    badge: "best",
    description: "Hoa lan hồ điệp cao cấp trong chậu gốm thủ công, sống lâu trên 2 tháng. Quà tặng đẳng cấp cho người đặc biệt.",
    images: [
      "https://moonflowerhanoi.com/wp-content/uploads/2025/02/13.chau-hoa-lan-35-cay-trang-cao-quy.png",
      "https://hoachanthat.com/wp-content/uploads/2025/12/Chau-Lan-Ho-Diep-12-Canh-%E2%80%93-Do-Dau-Phu-Quy-Tieu-Canh-Chau-Cao.png",
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/503/876/products/n-2024-10-13t151502-039-1.png?v=1729040386030",
      "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/1/21/873034/_DS12694.jpg"
    ],
    sizes: ["1 cành", "2 cành", "3 cành"],
    inStock: true
  },
  {
    id: 9,
    name: "Mẫu Đơn Hạnh Phúc",
    category: "Peonies",
    occasion: "Wedding",
    price: 560000,
    oldPrice: 700000,
    rating: 4.9,
    reviews: 113,
    badge: "sale",
    description: "Hoa mẫu đơn Trung Quốc rực rỡ, mỗi bông to và đầy đặn như một viên ngọc quý. Tươi trong 5-7 ngày.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAu6hcK8aPShTba2ZudB8HNsjmPxWi9AS-3Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjB2arkEn0i2I1jZdaxjJS3-IHejn0x_51XQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2muwEsb9gvsjEfFzDc5je5MUw7N2CO00Zg&s",
      "https://www.flowercorner.vn/image/catalog/products/August%202023/hoa-cuoi-sac-mau-hoa-hanh-phuc.jpg"
    ],
    sizes: ["5 bông", "10 bông", "20 bông"],
    inStock: true
  },
  {
    id: 10,
    name: "Hoa Dại Bách Sắc",
    category: "Mixed",
    occasion: "Friendship",
    price: 300000,
    oldPrice: null,
    rating: 4.6,
    reviews: 234,
    badge: null,
    description: "Hỗn hợp hoa đồng nội được chọn lựa ngẫu nhiên mỗi ngày, luôn mới lạ và đầy màu sắc. Bó hoa bất ngờ dành cho bạn.",
    images: [
      "https://file.hstatic.net/200000427529/file/bo-hoa-ly-tang-sinh-nhat_980e12086fc14b88a9baaf095e477674_grande.jpeg",
      "https://flowersight.com/wp-content/uploads/2024/06/bo-hoa-hong-lac-than.jpg",
      "https://hoatuoishop.com/wp-content/uploads/2025/07/bo-hoa-gia-re-999666.jpg",
      "https://images.unsplash.com/photo-1453023492450-e7ceed7bc8f9?auto=format&fit=crop&w=600&h=700&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 11,
    name: "Cẩm Tú Cầu Xanh Tím",
    category: "Hydrangeas",
    occasion: "Anniversary",
    price: 420000,
    oldPrice: null,
    rating: 4.7,
    reviews: 89,
    badge: "new",
    description: "Cẩm tú cầu xanh tím hiếm gặp, mỗi bông to như quả bóng nhỏ. Tạo điểm nhấn ấn tượng cho không gian.",
    images: [
      "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1599771614015-aba47c92804e?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1561136594-7f68815cf8b2?auto=format&fit=crop&w=600&h=700&q=80"
    ],
    sizes: ["1 bông", "3 bông", "5 bông"],
    inStock: true
  },
  {
    id: 12,
    name: "Hộp Hồng Vườn Sang Trọng",
    category: "Roses",
    occasion: "Special",
    price: 890000,
    oldPrice: 1100000,
    rating: 5.0,
    reviews: 76,
    badge: "sale",
    description: "Hộp hoa hồng vườn cao cấp với 30 bông đa màu trong hộp gỗ handmade. Bảo quản tươi lâu lên đến 5-7 ngày.",
    images: [
      "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1560717845-968823efbee1?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1487530811015-780780169993?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&h=700&q=80"
    ],
    sizes: ["16 bông", "24 bông", "36 bông"],
    inStock: true
  }
];

// Format price in VND
function formatPrice(p) {
  return new Intl.NumberFormat('vi-VN').format(p) + 'đ';
}

// Stars HTML
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '<i class="fas fa-star"></i>'.repeat(full) +
    (half ? '<i class="fas fa-star-half-alt"></i>' : '') +
    '<i class="far fa-star"></i>'.repeat(empty);
}

/**
 * Render a real product image tag.
 * - Uses the Unsplash photo ID URL stored in p.images[index]
 * - Falls back gracefully if the URL fails to load
 */
function renderProductImg(src, alt, style = '') {
  return `<img
    src="${src}"
    alt="${alt}"
    loading="lazy"
    decoding="async"
    style="width:100%;height:100%;object-fit:cover;${style}"
    onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
  /><div class="img-fallback" style="display:none;width:100%;height:100%;align-items:center;justify-content:center;font-size:3.5rem;background:linear-gradient(135deg,var(--pink-light),var(--mint-light));">🌸</div>`;
}

// Toast notification
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.querySelector('.toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// AOS (Animate On Scroll) — lightweight custom
function initAOS() {
  const els = document.querySelectorAll('[data-aos]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        const delay = e.target.dataset.aosDelay || 0;
        setTimeout(() => e.target.classList.add('aos-animate'), parseInt(delay));
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// Header scroll effect
function initHeader() {
  const h = document.querySelector('.site-header');
  if (!h) return;
  window.addEventListener('scroll', () => {
    h.classList.toggle('scrolled', window.scrollY > 30);
  });
}

// Hamburger menu
function initHamburger() {
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.mobile-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('open');
  });
}

// Update cart count badge
function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('fleur_cart') || '[]');
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total ? 'flex' : 'none';
  });
}

// Add to cart
function addToCart(id, qty = 1) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  let cart = JSON.parse(localStorage.getItem('fleur_cart') || '[]');
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty += qty; }
  else { cart.push({ id, qty, size: product.sizes[0] }); }
  localStorage.setItem('fleur_cart', JSON.stringify(cart));
  updateCartBadge();
  showToast(`🌸 Đã thêm "${product.name}" vào giỏ hàng!`);
}

// Wishlist toggle
function toggleWish(id) {
  let wish = JSON.parse(localStorage.getItem('fleur_wish') || '[]');
  const idx = wish.indexOf(id);
  if (idx > -1) { wish.splice(idx, 1); }
  else { wish.push(id); }
  localStorage.setItem('fleur_wish', JSON.stringify(wish));
  return idx === -1;
}

function isWished(id) {
  const wish = JSON.parse(localStorage.getItem('fleur_wish') || '[]');
  return wish.includes(id);
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initHeader();
  initHamburger();
  updateCartBadge();
});
