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
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1561181286-d3f19b5843b9?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?auto=format&fit=crop&w=600&h=700&q=80",
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
      "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=600&h=700&q=80",
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
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=600&h=700&q=80"
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
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1587131782738-de30ea91a542?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?auto=format&fit=crop&w=600&h=700&q=80"
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
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1518979388966-7bf0c53f27e5?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1554631793-79d5cb7ac5e7?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1444930694458-01babf71870c?auto=format&fit=crop&w=600&h=700&q=80"
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
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1520301255226-bf5f144451c1?auto=format&fit=crop&w=600&h=700&q=80"
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
      "https://images.unsplash.com/photo-1490750967868-88df5691cc8b?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?auto=format&fit=crop&w=600&h=700&q=80"
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
      "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1596438459194-f275f413d6f8?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1617381820682-79bf5741e01e?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=700&q=80"
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
      "https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1587531623745-bf5e3596ca2d?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1565634025519-d33d659a58b1?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1594913993624-00fdfba9e4a6?auto=format&fit=crop&w=600&h=700&q=80"
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
      "https://images.unsplash.com/photo-1487530811015-780780169993?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=600&h=700&q=80",
      "https://images.unsplash.com/photo-1490731002756-f9e7c8dace91?auto=format&fit=crop&w=600&h=700&q=80",
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
function renderProductImg(src, alt) {
  return `<img
    src="${src}"
    alt="${alt}"
    loading="lazy"
    decoding="async"
    class="product-img-fill"
    onerror="this.classList.add('hidden');this.nextElementSibling.classList.add('show');"
  /><div class="img-fallback">🌸</div>`;
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
  document.documentElement.classList.add('js-loaded');
  const els = document.querySelectorAll('[data-aos]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = e.target.dataset.aosDelay || 0;
        setTimeout(() => e.target.classList.add('aos-animate'), parseInt(delay));
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => {
    // Nếu phần tử đã trong viewport khi trang load, animate ngay
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      const delay = el.dataset.aosDelay || 0;
      setTimeout(() => el.classList.add('aos-animate'), parseInt(delay));
    } else {
      obs.observe(el);
    }
  });
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
