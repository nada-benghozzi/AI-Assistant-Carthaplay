// components/FeatureCard.jsx
import React from 'react';

const FeatureCard = ({
  icon: Icon,
  title,
  description, 
  onClick,
  theme = "purple",
  size = "medium", // "small", "medium", "large"
  hover = true
}) => {
  const themeClasses = {
    purple: "bg-gradient-to-r from-purple-600 to-blue-600",
    blue: "bg-gradient-to-r from-blue-600 to-indigo-600",
    green: "bg-gradient-to-r from-green-600 to-teal-600",
    red: "bg-gradient-to-r from-red-600 to-pink-600"
  };

  const sizeClasses = {
    small: {
      card: "p-4",
      icon: "w-8 h-8",
      iconContainer: "w-10 h-10 mb-3",
      title: "text-base font-semibold mb-1",
      description: "text-xs"
    },
    medium: {
      card: "p-6", 
      icon: "w-6 h-6",
      iconContainer: "w-12 h-12 mb-4",
      title: "text-lg font-semibold mb-2",
      description: "text-sm"
    },
    large: {
      card: "p-8",
      icon: "w-8 h-8", 
      iconContainer: "w-16 h-16 mb-6",
      title: "text-xl font-semibold mb-3",
      description: "text-base"
    }
  };

  const hoverClasses = hover 
    ? "hover:shadow-md transition-all duration-300 cursor-pointer" 
    : "";

  const borderColor = theme === 'purple' ? 'border-purple-100' : 
                     theme === 'blue' ? 'border-blue-100' :
                     theme === 'green' ? 'border-green-100' : 'border-red-100';

  return (
    <div 
      className={`bg-white rounded-xl shadow-sm border ${borderColor} ${sizeClasses[size].card} ${hoverClasses}`}
      onClick={onClick}
    >
      <div className={`${sizeClasses[size].iconContainer} ${themeClasses[theme]} rounded-lg flex items-center justify-center`}>
        <Icon className={`${sizeClasses[size].icon} text-white`} />
      </div>
      <h3 className={`${sizeClasses[size].title} text-gray-800`}>
        {title}
      </h3>
      <p className={`${sizeClasses[size].description} text-gray-600`}>
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;