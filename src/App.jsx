import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import BackgroundMusic from './components/BackgroundMusic';
import { MessageCircle } from 'lucide-react';

function App() {
  const whatsappMessage = encodeURIComponent("Olá, gostaria de agendar uma unha contigo podemos agendar uma data e horario?");
  const whatsappLink = `https://wa.me/5511987557611?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Gallery />
      </main>

      <Footer />
      
      <BackgroundMusic />

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 hover:scale-110 animate-bounce-slow"
        aria-label="Agendar pelo WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

export default App;
