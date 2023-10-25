import React, { useState } from 'react';
import CustomButton from '../../components/UI/customButton/CustomButton';
import css from './DummyChart.module.sass';

const DummyChart = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className={css.container}>
      <h2>Chart Component</h2>
      <p>Current Count: {count}</p>
      <div className={css.btn}>
        <CustomButton onClick={incrementCount}>Increment</CustomButton>
        <CustomButton onClick={decrementCount}>Decrement</CustomButton>
      </div>
    </div>
  );
};

export default DummyChart;
