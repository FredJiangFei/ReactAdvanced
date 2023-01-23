import React from 'react';
import CounterContext from './counterContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return { ...state, count: state.count + action.step };
    }
    case 'decrement': {
      return { ...state, count: state.count - action.step };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

function CounterProvider({ step = 1, initialCount = 0, ...props }) {
  const [state, dispatch] = React.useReducer(reducer, { count: initialCount });

  const value = [state, dispatch];
  return <CounterContext.Provider value={value} {...props} />;
}

export default CounterProvider;
