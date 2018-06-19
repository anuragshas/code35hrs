import React, { Component } from 'react';
import 'react-notifications/lib/notifications.css';
import Products from './Products';
import Cart from './Cart';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2 className="Header">&lt; Orders Summary </h2>
        <div className="App">
          <Products />
          <Cart />
        </div>
      </div>
    );
  }
}

export default App;
