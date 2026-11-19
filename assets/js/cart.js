// ===========================
//  FLEUR — Cart JS
// ===========================

function getCart() {
  return JSON.parse(localStorage.getItem('fleur_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('fleur_cart', JSON.stringify(cart));
  updateCartBadge();
}

function getCartTotal(cart) {
  return cart.reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return p ? sum + p.price * item.qty : sum;
  }, 0);
}

function renderCartItem(item) {
  const p = PRODUCTS.find(x => x.id === item.id);
  if (!p) return '';
  return `
    <div class="cart-item" id="cart-item-${item.id}">
      <div class="cart-item-info">
        <div class="cart-item-img">
          ${renderProductImg(p.images[0], p.name)}
        </div>
        <div>
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-var">${item.size || p.sizes[0]}</div>
        </div>
      </div>
      <div class="cart-price">${formatPrice(p.price)}</div>
      <div class="cart-qty-wrap">
        <div class="qty-wrap">
          <button class="qty-btn" onclick="updateQty(${p.id}, -1)">−</button>
          <input class="qty-input" type="number" min="1" value="${item.qty}" onchange="setQty(${p.id}, this.value)" />
          <button class="qty-btn" onclick="updateQty(${p.id}, 1)">+</button>
        </div>
      </div>
      <div class="cart-subtotal">${formatPrice(p.price * item.qty)}</div>
      <button class="cart-remove" onclick="removeFromCart(${p.id})" title="Xóa">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;
}

function renderCart() {
  const cart = getCart();
  const container = document.getElementById('cartItems');
  const empty = document.getElementById('emptyCart');
  const tableWrap = document.getElementById('cartTableWrap');
  const summaryWrap = document.getElementById('cartSummaryWrap');
  if (!container) return;

  if (cart.length === 0) {
    if (empty) empty.style.display = 'block';
    if (tableWrap) tableWrap.style.display = 'none';
    if (summaryWrap) summaryWrap.style.display = 'none';
    return;
  }

  if (empty) empty.style.display = 'none';
  if (tableWrap) tableWrap.style.display = 'block';
  if (summaryWrap) summaryWrap.style.display = 'block';

  container.innerHTML = cart.map(renderCartItem).join('');
  updateSummary();
}

function updateSummary() {
  const cart = getCart();
  const subtotal = getCartTotal(cart);
  const discount = parseInt(localStorage.getItem('fleur_discount') || '0');
  const shipping = cart.length > 0 ? 30000 : 0;
  const total = subtotal - discount + shipping;

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('summarySubtotal', formatPrice(subtotal));
  set('summaryDiscount', discount ? `-${formatPrice(discount)}` : 'Chưa áp dụng');
  set('summaryShipping', shipping === 0 ? 'Miễn phí' : formatPrice(shipping));
  set('summaryTotal', formatPrice(Math.max(0, total)));
}

function updateQty(id, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(cart);
  renderCart();
}

function setQty(id, val) {
  let cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, parseInt(val) || 1);
  saveCart(cart);
  renderCart();
}

function removeFromCart(id) {
  let cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  renderCart();
  showToast('🗑️ Đã xóa sản phẩm khỏi giỏ hàng');
}

function applyCoupon() {
  const code = document.getElementById('couponInput')?.value?.trim().toUpperCase();
  const COUPONS = { 'FLEUR10': 0.1, 'LOVE20': 0.2, 'BLOOM15': 0.15 };
  const cart = getCart();
  const subtotal = getCartTotal(cart);

  if (COUPONS[code]) {
    const disc = Math.round(subtotal * COUPONS[code]);
    localStorage.setItem('fleur_discount', disc);
    showToast(`🎉 Áp dụng mã giảm ${(COUPONS[code] * 100)}% thành công!`);
  } else {
    showToast('❌ Mã giảm giá không hợp lệ');
  }
  updateSummary();
}

function clearCart() {
  localStorage.removeItem('fleur_cart');
  localStorage.removeItem('fleur_discount');
  updateCartBadge();
  renderCart();
  showToast('🛒 Giỏ hàng đã được làm trống');
}

function checkout() {
  const cart = getCart();
  if (!cart.length) { showToast('🌸 Giỏ hàng trống!'); return; }
  showToast('🎉 Đặt hàng thành công! Cảm ơn bạn đã tin tưởng Fleur!');
  setTimeout(() => {
    localStorage.removeItem('fleur_cart');
    localStorage.removeItem('fleur_discount');
    updateCartBadge();
    renderCart();
  }, 1500);
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  const couponBtn = document.getElementById('couponApply');
  if (couponBtn) couponBtn.addEventListener('click', applyCoupon);
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);
  const clearBtn = document.getElementById('clearCart');
  if (clearBtn) clearBtn.addEventListener('click', clearCart);
});
