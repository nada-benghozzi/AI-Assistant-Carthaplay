// components/FileUpload.jsx
import React, { useRef } from 'react';
import { FileText, FileImage, X, Upload } from 'lucide-react';

const FileUpload = ({
  onFileSelect,
  onFileRemove,
  selectedFiles = [],
  acceptedTypes = {
    pdf: true,
    images: true
  },
  theme = "purple",
  compact = false
}) => {
  const pdfInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const themeClasses = {
    purple: {
      pdf: "bg-purple-100 hover:bg-purple-200 text-purple-600",
      image: "bg-blue-100 hover:bg-blue-200 text-blue-600"
    },
    blue: {
      pdf: "bg-blue-100 hover:bg-blue-200 text-blue-600", 
      image: "bg-indigo-100 hover:bg-indigo-200 text-indigo-600"
    },
    green: {
      pdf: "bg-green-100 hover:bg-green-200 text-green-600",
      image: "bg-teal-100 hover:bg-teal-200 text-teal-600"  
    }
  };

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      onFileSelect('pdf', file);
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      onFileSelect('images', files);
    }
  };

  const pdfFile = selectedFiles.find(f => f.type === 'pdf');
  const imageFiles = selectedFiles.filter(f => f.type === 'images').flatMap(f => f.files || []);

  return (
    <div className={`${compact ? 'space-y-2' : 'space-y-3'}`}>
      
      {/* Boutons d'upload */}
      <div className={`flex items-center gap-3 ${compact ? 'flex-wrap' : ''}`}>
        <input
          type="file"
          accept="application/pdf"
          className="hidden"
          ref={pdfInputRef}
          onChange={handlePdfChange}
        />
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          ref={imageInputRef}
          onChange={handleImageChange}
        />
        
        {acceptedTypes.pdf && (
          <button
            onClick={() => pdfInputRef.current?.click()}
            className={`flex items-center gap-2 px-3 py-2 ${themeClasses[theme].pdf} rounded-lg transition-colors duration-200 ${compact ? 'text-xs' : 'text-sm'}`}
            title="Télécharger un PDF"
          >
            <FileText className="w-4 h-4" />
            <span>PDF</span>
          </button>
        )}
        
        {acceptedTypes.images && (
          <button
            onClick={() => imageInputRef.current?.click()}
            className={`flex items-center gap-2 px-3 py-2 ${themeClasses[theme].image} rounded-lg transition-colors duration-200 ${compact ? 'text-xs' : 'text-sm'}`}
            title="Télécharger des images"
          >
            <FileImage className="w-4 h-4" />
            <span>Images</span>
          </button>
        )}
      </div>

      {/* Aperçu des fichiers sélectionnés */}
      {(pdfFile || imageFiles.length > 0) && (
        <div className={`p-3 bg-gray-50 rounded-lg ${compact ? 'text-xs' : 'text-sm'}`}>
          {pdfFile && (
            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <FileText className="w-4 h-4 flex-shrink-0" />
              <span className="truncate flex-1">{pdfFile.name}</span>
              <button
                onClick={() => onFileRemove('pdf')}
                className="text-red-500 hover:text-red-700 flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          {imageFiles.length > 0 && (
            <div className="flex items-center gap-2 text-gray-600">
              <FileImage className="w-4 h-4 flex-shrink-0" />
              <span className="flex-1">{imageFiles.length} image(s) sélectionnée(s)</span>
              <button
                onClick={() => onFileRemove('images')}
                className="text-red-500 hover:text-red-700 flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;