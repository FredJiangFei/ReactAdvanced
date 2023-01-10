import * as React from 'react';
import { allMessages } from '../data/allMessages';

const MessagesDisplay = React.forwardRef(function MessagesDisplay(
  { messages },
  ref
) {
  const containerRef = React.useRef();

  React.useLayoutEffect(() => {
    scrollToBottom();
  });

  const scrollToTop = () => (containerRef.current.scrollTop = 0);
  const scrollToBottom = () =>
    (containerRef.current.scrollTop = containerRef.current.scrollHeight);

  React.useImperativeHandle(ref, () => ({
    scrollToTop,
    scrollToBottom,
  }));

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
});

function UseImperativeHandle() {
  const messageDisplayRef = React.useRef();

  const [messages, setMessages] = React.useState(allMessages.slice(0, 8));

  const scrollToTop = () => messageDisplayRef.current.scrollToTop();
  const scrollToBottom = () => messageDisplayRef.current.scrollToBottom();

  return (
    <div className="messaging-app">
      <button onClick={scrollToTop}>scroll to top</button>
      <MessagesDisplay ref={messageDisplayRef} messages={messages} />
      <button onClick={scrollToBottom}>scroll to bottom</button>
    </div>
  );
}

export default UseImperativeHandle;
