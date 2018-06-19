import initialState from './initialState';

export default (state = null, action) => {
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
    case 'RESET':
      return initialState.cart;
    default:
      return state;
  }
};
