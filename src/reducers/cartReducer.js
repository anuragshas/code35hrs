import initialState from './initialState';

export default (state = initialState.cart, action) => {
  switch (action.type) {
    case 'UPDATE':
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            ...action.update,
          };
        }
        return item;
      });
    case 'REMOVE':
      return state.filter(i => i.id !== action.item.id);
    default:
      return state;
  }
};
