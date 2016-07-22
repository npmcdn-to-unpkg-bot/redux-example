import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addToCart as addToCartAction } from '../modules/cart';
import { getVisibleProducts } from '../modules/products';
import ProductsList from '../components/ProductsList';
import ProductItem from '../components/ProductItem';

const propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired
};
const ProductsContainer = ({
  products,
  addToCart
}) => (
  <ProductsList title="Products">
    {
      products.map(product =>
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)}
        />
      )
    }
  </ProductsList>
);

ProductsContainer.propTypes = propTypes;

const mapStateToProps = (state) => ({
  products: getVisibleProducts(state.products)
});
export default connect(
  mapStateToProps,
  { addToCart: addToCartAction }
)(ProductsContainer);

