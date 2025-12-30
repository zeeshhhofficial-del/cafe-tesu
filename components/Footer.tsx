
import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="location" className="bg-[#faf9f6] pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-4xl font-serif text-slate-900 mb-8">Visit Us</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold flex-shrink-0 mt-1" />
                <p className="text-slate-600 text-lg">
                  4, Sri Aurobindo Marg, near IIT Flyover, Vijay Mandal Enclave, Kalu Sarai, New Delhi – 110016
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-gold" />
                <p className="text-slate-600 text-lg">+91 99718 11111</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-gold" />
                <p className="text-slate-600 text-lg">hello@cafetesu.com</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold transition-all shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0298511634593!2d77.2023363150807!3d28.538838382455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce213d5483f99%3A0x8e8a867b931d8e13!2sCafe%20Tesu!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-200 gap-6">
          <p className="text-slate-400 text-sm">
            © 2024 Cafe Tesu (कैफे टेसू). All rights reserved. Premium dining experience.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-slate-600 text-sm underline underline-offset-4">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-slate-600 text-sm underline underline-offset-4">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
