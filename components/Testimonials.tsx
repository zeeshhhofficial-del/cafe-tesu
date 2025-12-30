
import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-medium uppercase tracking-[0.2em] text-sm mb-4 block">Guest Voices</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">What Our Patrons Say</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-lg hover:border-gold/50 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < review.rating ? "#c5a059" : "none"} color="#c5a059" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-8 text-lg leading-relaxed">
                "{review.comment}"
              </p>
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full border-2 border-gold/30" />
                <div>
                  <h4 className="font-medium text-white">{review.author}</h4>
                  <span className="text-xs uppercase text-gold tracking-widest">Verified Resident</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
