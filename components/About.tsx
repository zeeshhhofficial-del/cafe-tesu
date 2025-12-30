
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            {/* 3D Frame Effect */}
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl transform -rotate-3 transition-transform group-hover:rotate-1" />
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200" 
              alt="Cafe Tesu Ambience" 
              className="relative z-10 w-full rounded-2xl shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl shadow-xl z-20 hidden md:block">
              <span className="text-4xl font-serif text-gold font-bold">4.3 ⭐</span>
              <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">5,190+ Reviews</p>
            </div>
          </div>

          <div>
            <span className="text-gold font-medium uppercase tracking-[0.2em] text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">
              Crafting Lifestyle <br />Experiences Since Day One
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Cafe Tesu is more than just a café; it's a sanctuary for the creative and the sophisticated. 
              Located near the iconic IIT Flyover, we blend a calm, soothing atmosphere with 
              culinary excellence.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              From our Mediterranean-inspired interiors to our artisanal coffee blends, every detail 
              is curated to offer a luxurious, Instagram-worthy experience that celebrates the spirit 
              of South Delhi.
            </p>
            <div className="flex gap-8 border-t border-slate-100 pt-8">
              <div>
                <span className="block text-2xl font-serif text-slate-900">12:00 AM</span>
                <span className="text-sm text-slate-500 uppercase tracking-tighter">Closing Time</span>
              </div>
              <div>
                <span className="block text-2xl font-serif text-slate-900">₹₹₹</span>
                <span className="text-sm text-slate-500 uppercase tracking-tighter">Price Range</span>
              </div>
              <div>
                <span className="block text-2xl font-serif text-slate-900">South Delhi</span>
                <span className="text-sm text-slate-500 uppercase tracking-tighter">Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
