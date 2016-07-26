import React, { PropTypes } from 'react';

const propTypes = {
  value: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

const Counter = ({ value, onIncrement, onDecrement }) => {
  const onIncrementIfOdd = () => {
    if (value % 2 === 0) {
      return;
    }
    onIncrement();
  };
  const onIncrementAsync = () => {
    setTimeout(onIncrement, 1000);
  };

  return (
    <p>
      Clicked: {value} times
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrementIfOdd}>Increase if odd</button>
      <button onClick={onIncrementAsync}>Increase async</button>
    </p>
  );
};

Counter.propTypes = propTypes;
export default Counter;
