import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function store() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
