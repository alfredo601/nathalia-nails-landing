import React from 'react';
import { Calendar } from 'lucide-react';

const Hero = () => {
  const whatsappMessage = encodeURIComponent("Olá, gostaria de agendar uma unha contigo podemos agendar uma data e horario?");
  const whatsappLink = `https://wa.me/5511987557611?text=${whatsappMessage}`;

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/video1.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load or on mobile data saver */}
          <img 
            src="/assets/images/Image01.png" 
            alt="Nail Art Background" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-bold mb-6 animate-fade-in-up">
          Renovo sua autoestima através das unhas
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 font-light tracking-wide">
          Nathalia Gonzaga | Nail Designer
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-primary hover:bg-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <Calendar className="mr-2" size={24} />
          Agendar Horário
        </a>
      </div>
    </section>
  );
};

export default Hero;
