import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { updateQty, removeFromCart } from '../actions/cartActions';

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
                item.qty -= 1;
                const update = {
                  qty: item.qty,
                };
                updateQty(item.id, update);
              } else {
                removeFromCart(item);
                NotificationManager.info(item.name, 'Item Removed', 2000);
              }
            }}
          >
            -
          </button>
          <div className="inputQty">{item.qty}</div>
          <button
            className="plus"
            onClick={() => {
              item.qty += 1;
              const update = {
                qty: item.qty,
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
    const { cart } = this.props;
    return (
      <div className="products">
        <div className="productsHeader">
          <div className="items">
            <span>Items({cart.length})</span>
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
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  updateQty: (id, update) => dispatch(updateQty(id, update)),
  removeFromCart: item => dispatch(removeFromCart(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
