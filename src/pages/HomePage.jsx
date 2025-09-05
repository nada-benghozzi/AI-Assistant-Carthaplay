// pages/HomePage.jsx
import React from 'react';
import { MessageCircle, FileText, Image } from 'lucide-react';
import FloatingButton from '../components/FloatingButton';
import FeatureCard from '../components/FeatureCard';

const HomePage = ({ onStartChat }) => {
  const features = [
    {
      icon: MessageCircle,
      title: "Chat Intelligent", 
      description: "Discutez avec notre IA pour créer des quiz personnalisés"
    },
    {
      icon: FileText,
      title: "Import PDF",
      description: "Téléchargez vos documents pour générer des quiz automatiquement"  
    },
    {
      icon: Image,
      title: "Analyse d'Images", 
      description: "Créez des quiz à partir d'images et de diagrammes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            CarthaPlay Assistant IA
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Créez des quiz éducatifs personnalisés en quelques clics grâce à notre assistant IA intelligent
          </p>
        </div>

        {/* Cartes de fonctionnalités */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              theme="purple"
            />
          ))}
        </div>

        {/* Bouton principal */}
        <div className="text-center">
          <button
            onClick={onStartChat}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Commencer avec l'Assistant IA
          </button>
        </div>
      </div>

      {/* Bouton flottant */}
      <FloatingButton 
        onClick={onStartChat}
        label="Assistant IA"
        position="bottom-right"
        size="medium"
        color="purple"
      />
    </div>
  );
};

export default HomePage;