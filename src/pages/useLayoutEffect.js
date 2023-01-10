import * as React from 'react';
import { allMessages } from '../data/allMessages';

function MessagesDisplay({ messages }) {
  const containerRef = React.useRef();
  
  React.useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  });

  return (
    <div ref={containerRef} role="log">
      {messages.map((message, index, array) => (
        <div key={message.id}>
          <strong>{message.author}</strong>: <span>{message.content}</span>
          {array.length - 1 === index ? null : <hr />}
        </div>
      ))}
    </div>
  );
}

function sleep(time = 0) {
  const wakeUpTime = Date.now() + time;
  while (Date.now() < wakeUpTime) {}
}

function SlooooowSibling() {
  React.useEffect(() => {
    sleep(1000);
  });
  return null;
}

function UseLayoutEffect() {
  const [messages, setMessages] = React.useState(allMessages.slice(0, 8));
  const addMessage = () =>
    messages.length < allMessages.length
      ? setMessages(allMessages.slice(0, messages.length + 1))
      : null;
  const removeMessage = () =>
    messages.length > 0
      ? setMessages(allMessages.slice(0, messages.length - 1))
      : null;

  return (
    <div className="messaging-app">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={addMessage}>add message</button>
        <button onClick={removeMessage}>remove message</button>
      </div>
      <hr />
      <MessagesDisplay messages={messages} />
      <SlooooowSibling />
    </div>
  );
}

export default UseLayoutEffect;
