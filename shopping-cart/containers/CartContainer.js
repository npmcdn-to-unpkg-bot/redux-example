import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { checkout as checkoutAction } from '../modules/cart';
import { getTotal, getCartProducts } from '../modules';
import Cart from '../components/Cart';

const propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
};
const CartContainer = ({
  products,
  total,
  checkout
}) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout()}
  />
);

CartContainer.propTypes = propTypes;
const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
});

export default connect(
  mapStateToProps,
  { checkout: checkoutAction }
)(CartContainer);
