import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function store() {
  const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')),
  };
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
