export const updateQty = (id, update) => ({
  type: 'UPDATE',
  id,
  update,
});

export const removeFromCart = item => ({
  type: 'REMOVE',
  item,
});

export const addToCart = () => ({
  type: 'RESET',
});
