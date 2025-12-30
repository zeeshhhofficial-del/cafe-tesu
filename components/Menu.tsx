
import React from 'react';
import { SIGNATURE_MENU } from '../constants';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-[#fcfaf7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-medium uppercase tracking-[0.2em] text-sm mb-4 block">Signature Palette</span>
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-4">The Culinary Collection</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SIGNATURE_MENU.map((item) => (
            <div 
              key={item.id} 
              className="group perspective-1000"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 transform preserve-3d group-hover:rotateY-6 group-hover:rotateX-2 group-hover:-translate-y-2 border border-slate-100">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif text-slate-900 leading-tight">{item.name}</h3>
                    <span className="text-gold font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <button className="w-full py-3 rounded-xl border border-gold text-gold font-medium transition-all hover:bg-gold hover:text-white uppercase text-xs tracking-widest">
                    Add to Order
                  </button>
                </div>
                {/* 3D Depth Highlight */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-slate-900 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-gold transition-all shadow-xl">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
