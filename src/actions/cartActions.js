export const addToCart = item => ({
  type: 'ADD',
  item,
});

export const removeFromCart = item => ({
  type: 'REMOVE',
  item,
});
