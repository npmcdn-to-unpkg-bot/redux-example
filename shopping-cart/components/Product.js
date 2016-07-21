import React, { PropTypes } from 'react';

const propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
};
const Product = ({
  price,
  quantity,
  title
}) => (
  <div>
    {title} - &#36;{price} {`x ${quantity}`}
  </div>
);

Product.propTypes = propTypes;
export default Product;
