import React, { PropTypes } from 'react';
import Product from './Product';

const propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
};
const ProductItem = ({
  product,
  onAddToCartClicked
}) => (
  <div style={{ marginBottom: 20 }}>
    <Product {...product} />
    <button
      disabled={!product.inventory}
      onClick={onAddToCartClicked}
    >
      {product.inventory ? 'Add to cart' : 'Sold out'}
    </button>
  </div>
);

ProductItem.propTypes = propTypes;
export default ProductItem;
