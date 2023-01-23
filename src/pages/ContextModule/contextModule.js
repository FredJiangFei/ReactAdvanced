import React from 'react';
import Counter from './counter';
import CounterProvider from './counterProvider';

export default function ContextModule() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
