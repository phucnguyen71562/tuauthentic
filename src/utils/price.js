export function formatPrice(price) {
  return price.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}

export function getPriceDiscount(price, discount) {
  return formatPrice(price - (price * discount) / 100);
}
