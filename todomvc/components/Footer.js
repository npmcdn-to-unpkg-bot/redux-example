import React, { PropTypes } from 'react';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../constant';
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
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

const Footer = ({
  completedCount,
  activeCount,
  filter,
  onClearCompleted,
  onShow
}) => {
  const renderClearButton = () => {
    if (!completedCount) {
      return null;
    }

    return (
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    );
  };

  const renderTodoCount = () => {
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );
  };

  const renderFilterLink = (filterValue) => {
    const title = FILTER_TITLES[filterValue];
    const className = cx({
      selected: filter === filterValue
    });

    return (
      <a className={className} style={{ cursor: 'pointer' }} onClick={() => onShow(filterValue)}>
        {title}
      </a>
    );
  };

  return (
    <footer ckassName="footer">
      {renderTodoCount()}
      <ul className="filters">
        {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filterValue => (
          <li key={filterValue}>
            {renderFilterLink(filterValue)}
          </li>
        ))}
      </ul>
      {renderClearButton()}
    </footer>
  );
};

Footer.propTypes = propTypes;
export default Footer;
