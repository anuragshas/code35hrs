import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div className="cart">
        <div className="itemsCart">
          <div>Items({cart.length})</div>
          <div>:</div>
          <div>$138</div>
        </div>
        <div className="itemsCart">
          <div>Discount</div>
          <div>:</div>
          <div>$138</div>
        </div>
        <div className="itemsCart">
          <div>Type Discount</div>
          <div>:</div>
          <div>$138</div>
        </div>
        <div className="orderTotal">
          <div>Order Total</div>
          <div className="orderTotalValue">$138</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
