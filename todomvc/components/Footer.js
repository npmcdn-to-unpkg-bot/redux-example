import React, { PropTypes } from 'react';
import cx from 'classnames';

const propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired
};
const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
}

const Footer ({
  completedCount,
  activeCount,
  filter,
  onClearCompleted,
  onShow
});

Footer.propTypes = propTypes;
export default Footer;
