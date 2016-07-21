import React, { PropTypes } from 'react';

const propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};
const ProductsList = ({
  title,
  children
}) => (
  <div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

ProductsList.propTypes = propTypes;
export default ProductsList;
