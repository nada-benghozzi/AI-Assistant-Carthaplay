// components/QuizPanel.jsx
import React from 'react';
import { Sparkles } from 'lucide-react';
import QuizCard from './QuizCard';

const QuizPanel = ({ 
  quizzes = [], 
  onEdit, 
  onValidate, 
  onDelete,
  theme = "purple",
  title = "Quiz Générés",
  subtitle = "Vos quiz créés par l'IA",
  emptyMessage = "Aucun quiz généré pour le moment. Commencez par discuter avec l'assistant !",
  compact = false
}) => {
  const handleEditQuiz = (quiz) => {
    if (onEdit) {
      onEdit(quiz);
    } else {
      alert(`Modification du quiz: ${quiz.title}`);
    }
  };

  const handleValidateQuiz = (quiz) => {
    if (onValidate) {
      onValidate(quiz);
    } else {
      alert(`Validation du quiz: ${quiz.title}`);
    }
  };

  const handleDeleteQuiz = (quiz) => {
    if (onDelete) {
      if (window.confirm(`Êtes-vous sûr de vouloir supprimer le quiz "${quiz.title}" ?`)) {
        onDelete(quiz);
      }
    }
  };

  const borderColor = theme === 'purple' ? 'border-purple-100' : 
                     theme === 'blue' ? 'border-blue-100' :
                     theme === 'green' ? 'border-green-100' : 'border-gray-100';

  return (
    <div className={`${compact ? 'w-full' : 'w-80'} bg-white rounded-xl shadow-sm border ${borderColor} flex flex-col`}>
      
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>
      
      {/* Liste des quiz */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {quizzes.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              {emptyMessage}
            </p>
          </div>
        ) : (
          quizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              onEdit={handleEditQuiz}
              onValidate={handleValidateQuiz}
              onDelete={onDelete ? handleDeleteQuiz : undefined}
              theme={theme}
              compact={compact}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default QuizPanel;