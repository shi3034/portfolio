import React from 'react';
import { motion } from 'framer-motion';

interface ChatMessageProps {
  message: {
    text: string;
    isUser: boolean;
    timestamp: Date;
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          message.isUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-slate-700 text-white rounded-bl-none'
        }`}
      >
        <p className="text-sm">{message.text}</p>
        <span className="text-xs opacity-75 mt-1 block">
          {message.timestamp.toLocaleTimeString()}
        </span>
      </div>
    </motion.div>
  );
};

export default ChatMessage; 