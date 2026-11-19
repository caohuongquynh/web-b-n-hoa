// ===========================
//  FLEUR — Products Page JS
// ===========================

let currentProducts = [...PRODUCTS];
let filters = {
  categories: [],
  occasions: [],
  maxPrice: 1200000,
  search: ''
};

function renderProductCard(p) {
  const wished = isWished(p.id);
  const badgeHtml = p.badge
    ? `<span class="product-badge badge-${p.badge}">${p.badge === 'new' ? 'Mới' : p.badge === 'sale' ? 'Sale' : 'Best'
    }</span>`
    : '';

  return `
    <article class="product-card" data-aos="fade-up">
      <div class="product-img-wrap">
        ${badgeHtml}
        <button class="product-wish ${wished ? 'liked' : ''}" onclick="handleWish(${p.id}, this)" title="Yêu thích">
          <i class="${wished ? 'fas' : 'far'} fa-heart"></i>
        </button>
        <div class="product-img-inner" style="width:100%;height:100%;position:relative;overflow:hidden;">
          ${renderProductImg(p.images[0], p.name)}
        </div>
        <div class="product-quick">
          <a href="product-detail.html?id=${p.id}" class="btn btn-ghost" style="flex:1;justify-content:center;font-size:0.82rem;padding:10px;">
            <i class="far fa-eye"></i> Xem nhanh
          </a>
          <button class="btn btn-primary" style="flex:1;justify-content:center;font-size:0.82rem;padding:10px;" onclick="addToCart(${p.id})">
            <i class="fas fa-shopping-bag"></i> Thêm
          </button>
        </div>
      </div>
      <div class="product-body">
        <div class="product-cat">${p.category}</div>
        <h3 class="product-name"><a href="product-detail.html?id=${p.id}">${p.name}</a></h3>
        <div class="stars">
          ${renderStars(p.rating)}
          <span>(${p.reviews})</span>
        </div>
        <div class="product-footer">
          <div>
            <span class="product-price">${formatPrice(p.price)}</span>
            ${p.oldPrice ? `<span class="product-price-old">${formatPrice(p.oldPrice)}</span>` : ''}
          </div>
          <button class="add-cart-btn" onclick="addToCart(${p.id})" title="Thêm vào giỏ">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

function applyFilters() {
  currentProducts = PRODUCTS.filter(p => {
    if (filters.categories.length && !filters.categories.includes(p.category)) return false;
    if (filters.occasions.length && !filters.occasions.includes(p.occasion)) return false;
    if (p.price > filters.maxPrice) return false;
    if (filters.search && !p.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });
}

function renderGrid() {
  const grid = document.getElementById('productsGrid');
  const count = document.getElementById('productCount');
  if (!grid) return;

  if (currentProducts.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:80px 20px;">
        <div style="font-size:4rem;margin-bottom:16px;">🌸</div>
        <h3 style="font-family:var(--font-display);font-size:1.5rem;margin-bottom:8px;">Không tìm thấy hoa</h3>
        <p style="color:var(--text-muted);">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
      </div>
    `;
  } else {
    grid.innerHTML = currentProducts.map(renderProductCard).join('');
  }

  if (count) count.textContent = currentProducts.length;

  // Re-init AOS
  initAOS();
}

function handleWish(id, btn) {
  const liked = toggleWish(id);
  btn.classList.toggle('liked', liked);
  btn.innerHTML = `<i class="${liked ? 'fas' : 'far'} fa-heart"></i>`;
  showToast(liked ? '❤️ Đã thêm vào yêu thích!' : '💔 Đã xóa khỏi yêu thích');
}

function initFilters() {
  // Category checkboxes
  document.querySelectorAll('[data-filter="category"]').forEach(cb => {
    cb.addEventListener('change', () => {
      filters.categories = [...document.querySelectorAll('[data-filter="category"]:checked')].map(c => c.value);
      applyFilters();
      renderGrid();
    });
  });

  // Occasion checkboxes
  document.querySelectorAll('[data-filter="occasion"]').forEach(cb => {
    cb.addEventListener('change', () => {
      filters.occasions = [...document.querySelectorAll('[data-filter="occasion"]:checked')].map(c => c.value);
      applyFilters();
      renderGrid();
    });
  });

  // Price range
  const priceRange = document.getElementById('priceRange');
  const priceVal = document.getElementById('priceVal');
  if (priceRange) {
    priceRange.addEventListener('input', () => {
      filters.maxPrice = parseInt(priceRange.value);
      if (priceVal) priceVal.textContent = formatPrice(filters.maxPrice);
      applyFilters();
      renderGrid();
    });
  }

  // Search
  const searchInput = document.getElementById('productSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      filters.search = searchInput.value;
      applyFilters();
      renderGrid();
    });
  }

  // Sort
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      const val = sortSelect.value;
      if (val === 'price-asc') currentProducts.sort((a, b) => a.price - b.price);
      else if (val === 'price-desc') currentProducts.sort((a, b) => b.price - a.price);
      else if (val === 'rating') currentProducts.sort((a, b) => b.rating - a.rating);
      else if (val === 'popular') currentProducts.sort((a, b) => b.reviews - a.reviews);
      else currentProducts = [...PRODUCTS].filter(p => currentProducts.find(c => c.id === p.id));
      renderGrid();
    });
  }

  // Reset filters
  const resetBtn = document.getElementById('resetFilters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      filters = { categories: [], occasions: [], maxPrice: 1200000, search: '' };
      document.querySelectorAll('[data-filter]').forEach(el => { el.checked = false; });
      if (priceRange) priceRange.value = 1200000;
      if (priceVal) priceVal.textContent = formatPrice(1200000);
      if (searchInput) searchInput.value = '';
      currentProducts = [...PRODUCTS];
      renderGrid();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Check for URL param search
  const urlParams = new URLSearchParams(window.location.search);
  const q = urlParams.get('q');
  if (q) {
    filters.search = q;
    const si = document.getElementById('productSearch');
    if (si) si.value = q;
    applyFilters();
  }

  renderGrid();
  initFilters();
});
