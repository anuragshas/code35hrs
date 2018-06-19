import React, { Component } from 'react';
import 'react-notifications/lib/notifications.css';
import Products from './Products';
import Cart from './Cart';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products />
        <Cart />
      </div>
    );
  }
}

export default App;
