
import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 glass shadow-lg' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Coffee className="text-gold h-8 w-8" />
          <span className="text-2xl font-serif font-bold tracking-tight text-slate-800">
            Cafe Tesu <span className="text-sm font-normal text-slate-500 font-sans block leading-3">कैफे टेसू</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-700 hover:text-gold transition-colors font-medium text-sm tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onOpenReservation}
            className="bg-gold text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-md transform hover:scale-105"
          >
            Reserve a Table
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-800 text-lg font-medium border-b border-slate-100 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReservation();
            }}
            className="bg-gold text-white px-6 py-3 rounded-xl font-medium shadow-md"
          >
            Reserve a Table
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
