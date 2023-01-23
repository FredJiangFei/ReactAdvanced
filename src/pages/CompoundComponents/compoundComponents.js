import React from 'react';
import { Switch } from './switch';

const Toggle = ({ children }) => {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);
  
  return React.Children.map(children, (child) =>
    React.cloneElement(child, { on, toggle })
  );
};

const ToggleOn = ({ on, children }) => (on ? children : null);
const ToggleOff = ({ on, children }) => (on ? null : children);
const ToggleButton = ({ on, toggle, ...props }) => (
  <Switch on={on} onClick={toggle} {...props} />
);

function CompoundComponents() {
  return (
    <Toggle>
      <ToggleOn>The button is on</ToggleOn>
      <ToggleOff>The button is off</ToggleOff>
      <ToggleButton />
    </Toggle>
  );
}

export default CompoundComponents;
