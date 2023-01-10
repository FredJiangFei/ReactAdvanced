import * as React from 'react';

function useDebugValueTest() {
  const [isOnline, setIsOnline] = React.useState(null);
  React.useDebugValue(isOnline ? 'Online' : 'Offline');
  return { isOnline, setIsOnline };
}

function UseDebugValue() {
  const { isOnline, setIsOnline } = useDebugValueTest();

  return <button onClick={() => setIsOnline(!isOnline)}>Switch</button>;
}

export default UseDebugValue;
