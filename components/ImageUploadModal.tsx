
import React, { useState, useRef } from 'react';
import { X, Upload, Image as ImageIcon, CheckCircle2, Loader2 } from 'lucide-react';

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (imageUrl: string) => void;
}

const ImageUploadModal: React.FC<ImageUploadModalProps> = ({ isOpen, onClose, onUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const processFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!preview) return;
    setIsUploading(true);
    
    // Simulate premium upload experience
    setTimeout(() => {
      setIsUploading(false);
      setIsSuccess(true);
      setTimeout(() => {
        onUpload(preview);
        setPreview(null);
        setIsSuccess(false);
        onClose();
      }, 1500);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-gold transition-colors p-2 rounded-full hover:bg-slate-50 z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-slate-900 mb-2">Share Your Moment</h2>
            <p className="text-slate-500">Add your Cafe Tesu experience to our community gallery.</p>
          </div>

          {!preview ? (
            <div 
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`relative border-2 border-dashed rounded-[2rem] p-12 transition-all cursor-pointer flex flex-col items-center justify-center group ${
                dragActive ? 'border-gold bg-gold/5 scale-[0.99]' : 'border-slate-200 hover:border-gold hover:bg-slate-50'
              }`}
            >
              <input 
                ref={fileInputRef}
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={handleChange}
              />
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-slate-400 group-hover:text-gold group-hover:bg-gold/10 transition-all">
                <Upload size={32} />
              </div>
              <p className="text-lg font-medium text-slate-700 mb-1">Click to browse or drag & drop</p>
              <p className="text-sm text-slate-400">High-quality JPG, PNG up to 10MB</p>
            </div>
          ) : (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="relative h-64 md:h-80 w-full rounded-[2rem] overflow-hidden shadow-xl perspective-1000">
                <img 
                  src={preview} 
                  alt="Preview" 
                  className="w-full h-full object-cover transform transition-transform hover:scale-105"
                />
                <button 
                  onClick={() => setPreview(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full text-slate-600 hover:text-red-500 transition-colors shadow-lg"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex gap-4">
                <button 
                  disabled={isUploading || isSuccess}
                  onClick={handleUpload}
                  className="flex-1 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-gold transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Perfecting your photo...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 size={20} className="text-green-400" />
                      Moment Saved!
                    </>
                  ) : (
                    <>
                      <ImageIcon size={20} />
                      Post to Gallery
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUploadModal;
