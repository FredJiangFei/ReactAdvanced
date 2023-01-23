import useCounter from './useCounter';

function Counter() {
  const [state, dispatch] = useCounter();
  const increment = () => dispatch({ type: 'increment', step: 1 });
  const decrement = () => dispatch({ type: 'decrement', step: 1 });
  return (
    <div>
      <div>Current Count: {state.count}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
