import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { addToCart, removeFromCart } from '../actions/cartActions';

class Products extends Component {
  amount = item => {
    let inc = 0;
    this.props.cart.forEach(c => {
      if (c.id === item.id) {
        inc++;
      }
    });
    return inc;
  };
  productList = () => {
    const { products, addToCart, removeFromCart } = this.props;
    console.log();
    return products.map((item, index) => (
      <div className="productValue" key={index}>
        <div className="itemsValue">
          <div className="itemsdata">
            <div className="left">
              <img src={item.img_url} alt={item.name} />
              &nbsp;&nbsp;
              <span id="itemName">{item.name}</span>
            </div>
            <div className="right">
              <button className="delete" onClick={() => removeFromCart(item)}>
                x
              </button>
            </div>
          </div>
        </div>
        <div className="qtyValue">
          <button className="minus">-</button>
          <div className="inputQty">{this.amount(item)}</div>
          <button className="plus" onClick={() => addToCart(item)}>
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
    const { products } = this.props;
    return (
      <div className="products">
        <div className="productsHeader">
          <div className="items">
            <span>Items({products.length})</span>
          </div>
          <div className="qty">
            <span>Qty</span>
          </div>
          <div className="price">
            <span>Price</span>
          </div>
        </div>
        {this.productList()}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item)),
  removeFromCart: item => dispatch(removeFromCart(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
