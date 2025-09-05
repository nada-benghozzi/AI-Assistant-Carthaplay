// components/QuizCard.jsx
import React from 'react';
import { Clock, User, Star, BookOpen } from 'lucide-react';

const QuizCard = ({ 
  quiz, 
  onEdit, 
  onValidate, 
  onDelete,
  theme = "purple", // "purple", "blue", "green"
  showStats = true,
  compact = false
}) => {
  const themeClasses = {
    purple: {
      badge: "bg-purple-100 text-purple-600",
      button: "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
    },
    blue: {
      badge: "bg-blue-100 text-blue-600", 
      button: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
    },
    green: {
      badge: "bg-green-100 text-green-600",
      button: "bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
    }
  };

  return (
    <div className={`bg-white border border-${theme === 'purple' ? 'purple' : theme === 'blue' ? 'blue' : 'green'}-100 rounded-xl ${compact ? 'p-3' : 'p-4'} shadow-sm hover:shadow-md transition-all duration-300`}>
      
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className={`font-semibold text-gray-800 ${compact ? 'text-base' : 'text-lg'}`}>
          {quiz.title}
        </h3>
        <span className={`px-2 py-1 ${themeClasses[theme].badge} text-xs rounded-full flex items-center gap-1`}>
          <BookOpen className="w-3 h-3" />
          {quiz.questionsCount} questions
        </span>
      </div>

      {/* Description */}
      <p className={`text-gray-600 ${compact ? 'text-xs' : 'text-sm'} mb-4`}>
        {quiz.description}
      </p>

      {/* Stats (optionnel) */}
      {showStats && (
        <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
          {quiz.duration && (
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{quiz.duration} min</span>
            </div>
          )}
          {quiz.difficulty && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              <span>{quiz.difficulty}</span>
            </div>
          )}
          {quiz.participants && (
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{quiz.participants} participants</span>
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className={`flex gap-2 ${compact ? 'flex-col' : ''}`}>
        {onEdit && (
          <button
            onClick={() => onEdit(quiz)}
            className={`${compact ? 'flex-1' : 'flex-1'} bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200`}
          >
            Modifier
          </button>
        )}
        
        {onValidate && (
          <button
            onClick={() => onValidate(quiz)}
            className={`${compact ? 'flex-1' : 'flex-1'} ${themeClasses[theme].button} text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200`}
          >
            Valider
          </button>
        )}

        {onDelete && (
          <button
            onClick={() => onDelete(quiz)}
            className="bg-red-100 hover:bg-red-200 text-red-600 py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            Supprimer
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizCard;