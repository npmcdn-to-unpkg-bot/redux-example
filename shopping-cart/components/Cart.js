import React, { PropTypes } from 'react';
import Product from './Product';

const propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
};
const Cart = ({
  products,
  total,
  onCheckoutClicked
}) => {
  const hasProducts = (products.length);
  const nodes = !hasProducts ?
    <em>Please add some products to cart.</em> :
    products.map(product =>
      <Product
        {...product}
        key={product.id}
      />
    );

  return (
    <div>
      <h3>Your cart</h3>
      <div>{nodes}</div>
      <p>Total &#36;{total}</p>
      <button
        onClick={onCheckoutClicked}
        disabled={!hasProducts}
      >
        Checkout
      </button>
    </div>
  );
};

Cart.propTypes = propTypes;
export default Cart;
