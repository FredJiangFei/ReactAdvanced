import React from 'react';

const countReducer = (state, step) => state + step;

function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = React.useReducer(countReducer, initialCount);
  const increment = () => setCount(step);
  return (
    <button className="bg-red-100 p-4" onClick={increment}>
      {count}
    </button>
  );
}

const UseReducerRun = () => {
  return (
    <>
      <h1>UseReducer</h1>
      <Counter />
    </>
  );
};

export default UseReducerRun;
