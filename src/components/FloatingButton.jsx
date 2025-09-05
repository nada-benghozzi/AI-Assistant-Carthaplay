// components/FloatingButton.jsx
import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

const FloatingButton = ({ 
  onClick, 
  isVisible = true, 
  label = "Assistant IA",
  position = "bottom-right", // "bottom-right", "bottom-left", "top-right", "top-left"
  size = "medium", // "small", "medium", "large"
  color = "purple" // "purple", "blue", "green", "red"
}) => {
  if (!isVisible) return null;

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6", 
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6"
  };

  const sizeClasses = {
    small: "p-3",
    medium: "p-4", 
    large: "p-5"
  };

  const iconSizes = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8"
  };

  const sparklesSizes = {
    small: "w-2 h-2",
    medium: "w-3 h-3", 
    large: "w-4 h-4"
  };

  const colorClasses = {
    purple: "from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700",
    blue: "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
    green: "from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700",
    red: "from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
  };
  
  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <button
        onClick={onClick}
        className={`group bg-gradient-to-r ${colorClasses[color]} text-white rounded-full ${sizeClasses[size]} shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse`}
        aria-label={label}
      >
        <div className="relative">
          <Bot className={iconSizes[size]} />
          <Sparkles className={`${sparklesSizes[size]} absolute -top-1 -right-1 text-yellow-300 animate-spin`} />
        </div>
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {label}
        </span>
      </button>
    </div>
  );
};

export default FloatingButton;