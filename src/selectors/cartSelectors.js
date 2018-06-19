export default cart => {
  if (!cart) {
    return 0;
  }
  const totalQty = cart.map(item => item.qty).reduce((total, value) => total + value, 0);
  const basePrice = cart
    .map(item => item.price * item.qty)
    .reduce((total, value) => total + value, 0);
  const baseDiscount = cart
    .map(item => (item.discount / 100) * item.qty * item.price)
    .reduce((total, value) => total + value, 0);
  const typeDiscount = cart
    .map(item => {
      if (item.type === 'fiction') {
        return 0.15 * item.qty * item.price;
      }
      return null;
    })
    .reduce((total, value) => total + value, 0);
  return { totalQty, basePrice, baseDiscount, typeDiscount };
};
