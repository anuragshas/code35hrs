import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { updateQty, removeFromCart, addToCart } from '../actions/cartActions';
import cartSelectors from '../selectors/cartSelectors';

class Products extends Component {
  productList = () => {
    const { cart, updateQty, removeFromCart } = this.props;
    return cart.map((item, index) => (
      <div className="productValue" key={index}>
        <div className="itemsValue">
          <div className="itemsdata">
            <div className="left">
              <img src={item.img_url} alt={item.name} />
              &nbsp;&nbsp;
              <span id="itemName">{item.name}</span>
            </div>
            <div className="right">
              <button
                className="delete"
                onClick={() => {
                  removeFromCart(item);
                  NotificationManager.info(item.name, 'Item Removed', 2000);
                }}
              >
                x
              </button>
            </div>
          </div>
        </div>
        <div className="qtyValue">
          <button
            className="minus"
            onClick={() => {
              if (item.qty > 1) {
                const qty = item.qty - 1;
                const update = {
                  qty,
                };
                updateQty(item.id, update);
              }
            }}
          >
            -
          </button>
          <div className="inputQty">{item.qty}</div>
          <button
            className="plus"
            onClick={() => {
              const qty = item.qty + 1;
              const update = {
                qty,
              };
              updateQty(item.id, update);
            }}
          >
            +
          </button>
        </div>
        <div className="priceValue">
          <span>${item.price}</span>
        </div>
      </div>
    ));
  };

  render() {
    const { cart, addToCart } = this.props;
    const { totalQty } = cartSelectors(cart);
    return (
      <div className="products">
        <div className="productsHeader">
          <div className="items">
            <span>Items({totalQty})</span>
          </div>
          <div className="qty">
            <span>Qty</span>
          </div>
          <div className="price">
            <span>Price</span>
          </div>
        </div>
        {this.productList()}
        <NotificationContainer />
        {totalQty < 1 && (
          <button className="addButton" onClick={() => addToCart()}>
            Add Items
          </button>
        )}
      </div>
    );
  }
}

Products.propTypes = {
  cart: PropTypes.object,
  updateQty: PropTypes.func,
  removeFromCart: PropTypes.func,
  addToCart: PropTypes.func,
};

Products.defaultProps = {
  cart: null,
  updateQty: null,
  removeFromCart: null,
  addToCart: null,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  updateQty: (id, update) => dispatch(updateQty(id, update)),
  removeFromCart: item => dispatch(removeFromCart(item)),
  addToCart: () => dispatch(addToCart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
