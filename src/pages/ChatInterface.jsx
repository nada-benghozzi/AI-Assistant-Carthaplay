// pages/ChatInterface.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, X } from 'lucide-react';
import ChatMessage from '../components/ChatMessage';
import TypingIndicator from '../components/TypingIndicator';
import FileUpload from '../components/FileUpload';

const ChatInterface = ({ onClose, onQuizGenerated }) => {
  const [message, setMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bonjour ! Je suis votre assistant IA CarthaPlay 🎓. Je peux vous aider à créer des quiz personnalisés. Décrivez-moi ce que vous souhaitez ou envoyez-moi un document !",
      isBot: true,
      timestamp: "Maintenant"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleFileSelect = (type, files) => {
    const newFile = {
      type,
      files: Array.isArray(files) ? files : [files],
      name: Array.isArray(files) ? files[0]?.name : files.name
    };
    
    setSelectedFiles(prev => {
      const filtered = prev.filter(f => f.type !== type);
      return [...filtered, newFile];
    });
  };

  const handleFileRemove = (type) => {
    setSelectedFiles(prev => prev.filter(f => f.type !== type));
  };

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  const handleSubmit = () => {
    if (!message.trim() && selectedFiles.length === 0) return;

    const fileNames = selectedFiles.map(f => f.name || `${f.files?.length} fichier(s)`).join(', ');
    const userMessage = {
      id: Date.now(),
      text: message || `Fichier(s) envoyé(s): ${fileNames}`,
      isBot: false,
      timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    simulateTyping();

    // Simulation de génération de quiz
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Parfait ! J'ai analysé votre demande. Je vais générer un quiz personnalisé pour vous...",
        isBot: true,
        timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botResponse]);

      // Générer un quiz exemple
      setTimeout(() => {
        const newQuiz = {
          id: Date.now(),
          title: `Quiz ${selectedFiles.length > 0 ? 'basé sur fichier(s)' : 'personnalisé'}`,
          description: "Quiz généré automatiquement par l'assistant IA",
          questionsCount: Math.floor(Math.random() * 10) + 5,
          content: message || "Contenu basé sur les fichiers fournis",
          duration: Math.floor(Math.random() * 30) + 10,
          difficulty: ["Facile", "Moyen", "Difficile"][Math.floor(Math.random() * 3)]
        };

        if (onQuizGenerated) {
          onQuizGenerated(newQuiz);
        }

        const successMessage = {
          id: Date.now() + 2,
          text: "✨ Quiz généré avec succès ! Vous pouvez le voir dans le panneau des quiz et le modifier selon vos besoins.",
          isBot: true,
          timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, successMessage]);
      }, 1500);
    }, 2000);

    setMessage("");
    setSelectedFiles([]);
  };

  return (
    <div className="flex-1 bg-white rounded-xl shadow-sm border border-purple-100 flex flex-col">
      
      {/* Header */}
      <div className="p-4 border-b border-purple-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Discussion avec l'Assistant</h2>
              <p className="text-gray-500 text-sm">Assistant IA CarthaPlay</p>
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          )}
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg.text}
            isBot={msg.isBot}
            timestamp={msg.timestamp}
            theme="purple"
          />
        ))}
        {isTyping && <TypingIndicator theme="purple" />}
        <div ref={messagesEndRef} />
      </div>

      {/* Zone de saisie */}
      <div className="p-4 border-t border-purple-100">
        
        {/* Upload de fichiers */}
        <FileUpload
          onFileSelect={handleFileSelect}
          onFileRemove={handleFileRemove}
          selectedFiles={selectedFiles}
          theme="purple"
        />

        {/* Champ de saisie */}
        <div className="flex items-center gap-2 mt-3">
          <input
            type="text"
            placeholder="Décrivez le quiz que vous souhaitez créer..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            className="flex-1 border border-purple-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          />
          <button
            onClick={handleSubmit}
            disabled={!message.trim() && selectedFiles.length === 0}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;