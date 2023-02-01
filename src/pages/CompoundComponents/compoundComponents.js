import React from 'react';
import { Switch } from './switch';

const ToggleOn = ({ on, children }) => (on ? children : null);
const ToggleOff = ({ on, children }) => (on ? null : children);
const ToggleButton = ({ on, toggle, ...props }) => (
  <Switch on={on} onClick={toggle} {...props} />
);

const allowedTypes = [ToggleOn, ToggleOff, ToggleButton];

const Toggle = ({ children }) => {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  return React.Children.map(children, (child) => {
    if (allowedTypes.includes(child.type)) {
      const newChild = React.cloneElement(child, { on, toggle });
      return newChild;
    }

    return child;
  });
};

function CompoundComponents() {
  return (
    <Toggle>
      <ToggleOn>The button is on</ToggleOn>
      <ToggleOff>The button is off</ToggleOff>
      <span>, Hello</span>
      <ToggleButton />
    </Toggle>
  );
}

export default CompoundComponents;
