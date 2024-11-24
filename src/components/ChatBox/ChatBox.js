import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", type: "received" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: "sent" }]);
      setInput("");
    }
  };

  return (
    <div className="chat-box p-3">
      <div className="messages mb-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.type === "sent" ? "text-end text-primary" : "text-start text-secondary"
            } mb-2`}
          >
            <div className="p-2 rounded bg-light d-inline-block">{msg.text}</div>
          </div>
        ))}
      </div>
      <Form className="d-flex">
        <Form.Control
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="primary" onClick={handleSend} className="ms-2">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default ChatBox;
