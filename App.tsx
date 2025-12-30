
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import ImageUploadModal from './components/ImageUploadModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [userImages, setUserImages] = useState<string[]>([]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleUploadModal = () => setIsUploadModalOpen(!isUploadModalOpen);

  const handleNewUpload = (imageUrl: string) => {
    setUserImages(prev => [imageUrl, ...prev]);
  };

  return (
    <div className="min-h-screen">
      <Navbar onOpenReservation={toggleModal} />
      <main>
        <Hero onOpenReservation={toggleModal} />
        <About />
        <Menu />
        <Gallery 
          userImages={userImages} 
          onOpenUpload={toggleUploadModal} 
        />
        <Testimonials />
      </main>
      <Footer />
      
      {/* Modals */}
      <ReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
      <ImageUploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
        onUpload={handleNewUpload}
      />

      {/* Floating Reservation Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <button 
          onClick={toggleModal}
          className="bg-gold text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-2 transform active:scale-95 transition-all"
        >
          <span className="font-bold tracking-widest uppercase text-sm">Reserve</span>
        </button>
      </div>
    </div>
  );
};

export default App;
