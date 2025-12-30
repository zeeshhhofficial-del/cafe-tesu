
import React from 'react';
// Fix: Added missing 'Upload' import from lucide-react
import { Camera, Upload } from 'lucide-react';

interface GalleryProps {
  userImages: string[];
  onOpenUpload: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ userImages, onOpenUpload }) => {
  const defaultImages = [
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a',
  ];

  const allImages = [...userImages, ...defaultImages];

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-gold font-medium uppercase tracking-[0.2em] text-sm mb-4 block">Visual Journey</span>
            <h2 className="text-4xl font-serif text-slate-900 leading-tight">The Vibe at Cafe Tesu</h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-slate-500 max-w-xs text-sm md:text-right">
              A curated collection of moments shared by our patrons and our team.
            </p>
            <button 
              onClick={onOpenUpload}
              className="flex items-center gap-2 px-6 py-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-full hover:border-gold hover:text-gold transition-all shadow-sm group"
            >
              <Camera size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold uppercase tracking-widest">Share Your Moment</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-12 px-6 no-scrollbar snap-x cursor-grab active:cursor-grabbing">
        {allImages.map((src, i) => (
          <div 
            key={i} 
            className="min-w-[300px] md:min-w-[450px] h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl snap-center transform transition-all duration-700 hover:scale-[1.03] group relative"
          >
            <img 
              src={src.startsWith('data:') ? src : `${src}?auto=format&fit=crop&q=80&w=1200`} 
              alt={`Gallery ${i}`} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {i < userImages.length && (
              <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-slate-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                Community Guest
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
        
        {/* Empty State Call to Action in Gallery */}
        <div 
          onClick={onOpenUpload}
          className="min-w-[300px] md:min-w-[450px] h-[500px] rounded-[2.5rem] border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-slate-300 hover:border-gold/50 hover:text-gold/50 transition-all cursor-pointer group"
        >
          <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Upload size={24} />
          </div>
          <span className="font-serif text-2xl">Add Your Photo</span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
