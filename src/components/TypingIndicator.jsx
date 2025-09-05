// components/TypingIndicator.jsx
import React from 'react';
import { Bot } from 'lucide-react';

const TypingIndicator = ({ 
  avatar = null,
  theme = "purple",
  size = "medium" // "small", "medium", "large"
}) => {
  const themeClasses = {
    purple: "bg-gradient-to-r from-purple-600 to-blue-600",
    blue: "bg-gradient-to-r from-blue-600 to-indigo-600", 
    green: "bg-gradient-to-r from-green-600 to-teal-600"
  };

  const sizeClasses = {
    small: {
      avatar: "w-6 h-6",
      icon: "w-3 h-3",
      dot: "w-1.5 h-1.5",
      padding: "px-3 py-2"
    },
    medium: {
      avatar: "w-8 h-8", 
      icon: "w-4 h-4",
      dot: "w-2 h-2",
      padding: "px-4 py-3"
    },
    large: {
      avatar: "w-10 h-10",
      icon: "w-5 h-5", 
      dot: "w-2.5 h-2.5",
      padding: "px-5 py-4"
    }
  };

  return (
    <div className="flex justify-start mb-4">
      <div className="flex items-center space-x-2">
        <div className={`${sizeClasses[size].avatar} ${themeClasses[theme]} rounded-full flex items-center justify-center`}>
          {avatar || <Bot className={`${sizeClasses[size].icon} text-white`} />}
        </div>
        <div className={`bg-gray-100 rounded-2xl ${sizeClasses[size].padding}`}>
          <div className="flex space-x-1">
            <div className={`${sizeClasses[size].dot} bg-gray-400 rounded-full animate-bounce`}></div>
            <div 
              className={`${sizeClasses[size].dot} bg-gray-400 rounded-full animate-bounce`} 
              style={{animationDelay: '0.1s'}}
            ></div>
            <div 
              className={`${sizeClasses[size].dot} bg-gray-400 rounded-full animate-bounce`} 
              style={{animationDelay: '0.2s'}}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;