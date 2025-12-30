
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Normalize position to -1 to 1
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate particles only once
  const particles = useRef([...Array(15)].map((_, i) => ({
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 20}s`,
    duration: `${15 + Math.random() * 15}s`,
    size: `${2 + Math.random() * 4}px`
  }))).current;

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#faf9f6] perspective-2000"
    >
      {/* Interactive Floating Particles */}
      {particles.map((p, i) => (
        <div 
          key={i}
          className="particle"
          style={{
            left: p.left,
            bottom: '-20px',
            width: p.size,
            height: p.size,
            animation: `particle-drift ${p.duration} linear infinite`,
            animationDelay: p.delay
          }}
        />
      ))}

      {/* Dynamic Background Parallax Blobs */}
      <div 
        className="absolute top-20 left-[10%] w-64 h-64 bg-gold opacity-10 blur-[100px] rounded-full transition-transform duration-500 ease-out"
        style={{ transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)` }}
      />
      <div 
        className="absolute bottom-20 right-[10%] w-80 h-80 bg-[#8D6E63] opacity-10 blur-[120px] rounded-full transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)` }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto transition-transform duration-300 ease-out preserve-3d"
           style={{ transform: `rotateY(${mousePos.x * 5}deg) rotateX(${mousePos.y * -5}deg)` }}>
        
        <div className="inline-block px-4 py-1 border border-gold text-gold rounded-full text-xs tracking-widest uppercase mb-6 animate-float-slow">
          Premium South Delhi Experience
        </div>

        <h1 
          className="text-5xl md:text-8xl font-serif text-slate-900 mb-6 leading-tight drop-shadow-2xl transition-all duration-300"
          style={{ 
            textShadow: `${mousePos.x * -8}px ${mousePos.y * -8}px 20px rgba(0,0,0,0.05)`,
            transform: `translateZ(50px)`
          }}
        >
          A Symphony of <span className="italic">Flavors</span> & <span className="text-gold">Calm</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed transform translate-z-20">
          Discover an upscale sanctuary where luxury meets artisan craft. 
          Indulge in the finest brews and delicacies in the heart of South Delhi.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center preserve-3d">
          <button 
            onClick={onOpenReservation}
            className="bg-slate-900 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-2 hover:shadow-gold/20 active:scale-95"
            style={{ transform: `translateZ(30px)` }}
          >
            Reserve a Table
          </button>
          <button 
            className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full text-lg font-medium hover:bg-slate-50 transition-all shadow-lg hover:-translate-y-2 active:scale-95"
            style={{ transform: `translateZ(30px)` }}
          >
            Order Online
          </button>
        </div>
      </div>

      {/* Hero 3D Mockup Container with Perspective */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-1/2 perspective-2000 pointer-events-none opacity-40">
        <div 
          className="w-full h-full bg-gradient-to-t from-gold/30 via-gold/5 to-transparent transform transition-transform duration-1000 ease-out origin-bottom"
          style={{ transform: `rotateX(75deg) translateZ(-100px) translateY(${mousePos.y * 50}px) scale(${1 + mousePos.y * 0.05})` }} 
        />
      </div>

      {/* Decorative Floating 3D Assets (Abstract) */}
      <div 
        className="absolute top-[20%] right-[15%] w-12 h-12 glass rounded-lg rotate-12 animate-float opacity-40 hidden lg:block"
        style={{ transform: `translate(${mousePos.x * -80}px, ${mousePos.y * -80}px) rotate(${mousePos.x * 20}deg)` }}
      />
      <div 
        className="absolute bottom-[25%] left-[12%] w-16 h-16 glass rounded-full animate-float-slow opacity-30 hidden lg:block"
        style={{ transform: `translate(${mousePos.x * 100}px, ${mousePos.y * 100}px)` }}
      />

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 hover:text-gold transition-colors animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
