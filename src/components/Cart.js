import React, { Component } from 'react';
import { connect } from 'react-redux';
import cartSelectors from '../selectors/cartSelectors';

class Cart extends Component {
  render() {
    const { cart } = this.props;
    const { totalQty, basePrice, baseDiscount, typeDiscount = 0 } = cartSelectors(cart);
    return (
      <div className="cart">
        <div className="itemsCart">
          <div>Items({totalQty})</div>
          <div>:</div>
          <div>${basePrice}</div>
        </div>
        <div className="itemsCart">
          <div>Discount</div>
          <div>:</div>
          <div>-${baseDiscount}</div>
        </div>
        <div className="itemsCart">
          <div>Type Discount</div>
          <div>:</div>
          <div>-${typeDiscount}</div>
        </div>
        <div className="orderTotal">
          <div>Order Total</div>
          <div className="orderTotalValue">${basePrice - baseDiscount - typeDiscount}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
