// AssistantIA.jsx - Composant principal refactorisé
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ChatInterface from './pages/ChatInterface';
import QuizPanel from './components/QuizPanel';

const AssistantIA = () => {
  const [showChat, setShowChat] = useState(false);
  const [generatedQuizzes, setGeneratedQuizzes] = useState([]);

  const handleStartChat = () => {
    setShowChat(true);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  const handleQuizGenerated = (newQuiz) => {
    setGeneratedQuizzes(prev => [...prev, newQuiz]);
  };

  const handleEditQuiz = (quiz) => {
    // Logique de modification du quiz
    console.log('Modification du quiz:', quiz);
    // Vous pouvez ouvrir un modal d'édition, naviguer vers une page d'édition, etc.
  };

  const handleValidateQuiz = (quiz) => {
    // Logique de validation du quiz
    console.log('Validation du quiz:', quiz);
    // Vous pouvez publier le quiz, l'envoyer au serveur, etc.
  };

  const handleDeleteQuiz = (quiz) => {
    setGeneratedQuizzes(prev => prev.filter(q => q.id !== quiz.id));
  };

  // Page d'accueil
  if (!showChat) {
    return (
      <HomePage onStartChat={handleStartChat} />
    );
  }

  // Interface de chat
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto p-4 h-screen flex flex-col">
        
        {/* Header global */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4 border border-purple-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">IA</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Assistant IA CarthaPlay
                </h1>
                <p className="text-gray-500 text-sm">Créez des jeux éducatifs personnalisés</p>
              </div>
            </div>
            <button
              onClick={handleCloseChat}
              className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Retour à l'accueil
            </button>
          </div>
        </div>

        {/* Interface principale */}
        <div className="flex flex-1 gap-4 overflow-hidden">
          
          {/* Zone de chat */}
          <ChatInterface 
            onClose={handleCloseChat}
            onQuizGenerated={handleQuizGenerated}
          />

          {/* Panneau des quiz */}
          <QuizPanel 
            quizzes={generatedQuizzes}
            onEdit={handleEditQuiz}
            onValidate={handleValidateQuiz}
            onDelete={handleDeleteQuiz}
            theme="purple"
            title="Quiz Générés"
            subtitle="Vos quiz créés par l'IA"
          />
        </div>
      </div>
    </div>
  );
};

export default AssistantIA;