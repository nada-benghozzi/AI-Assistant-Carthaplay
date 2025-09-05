
// components/ChatMessage.jsx
import React from 'react';
import { Bot } from 'lucide-react';

const ChatMessage = ({ 
  message, 
  isBot, 
  timestamp, 
  avatar = null,
  theme = "purple" // "purple", "blue", "green"
}) => {
  const themeClasses = {
    purple: {
      bot: "bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100",
      user: "bg-gradient-to-r from-purple-600 to-blue-600 text-white",
      avatar: "bg-gradient-to-r from-purple-600 to-blue-600"
    },
    blue: {
      bot: "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100", 
      user: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
      avatar: "bg-gradient-to-r from-blue-600 to-indigo-600"
    },
    green: {
      bot: "bg-gradient-to-r from-green-50 to-teal-50 border border-green-100",
      user: "bg-gradient-to-r from-green-600 to-teal-600 text-white", 
      avatar: "bg-gradient-to-r from-green-600 to-teal-600"
    }
  };

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[70%] ${isBot ? 'order-2' : 'order-1'}`}>
        <div
          className={`px-4 py-3 rounded-2xl ${
            isBot
              ? themeClasses[theme].bot
              : themeClasses[theme].user
          } shadow-sm`}
        >
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
        <div className={`text-xs text-gray-500 mt-1 ${isBot ? 'text-left' : 'text-right'}`}>
          {timestamp}
        </div>
      </div>
      {isBot && (
        <div className="order-1 mr-3 mt-1">
          <div className={`w-8 h-8 ${themeClasses[theme].avatar} rounded-full flex items-center justify-center`}>
            {avatar || <Bot className="w-4 h-4 text-white" />}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;