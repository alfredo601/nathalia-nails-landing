import React from 'react';
import { MapPin, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
             {/* Using a nice image here, maybe Image18 or Image02 which looked like a portrait or hands */}
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="/assets/images/Image02.png"
                alt="Nathalia Gonzaga Nail Designer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Heart className="fill-current" />
                <span>Feito com amor</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">
              Sobre Mim
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Olá! Sou Nathalia Gonzaga, manicure autônoma especializada em transformar unhas em verdadeiras obras de arte. 
              Meu objetivo é proporcionar não apenas beleza, mas uma experiência de autocuidado e renovação da autoestima.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Trabalho com técnicas modernas de alongamento, esmaltação e nail art, sempre prezando pela saúde das suas unhas 
              e utilizando produtos de alta qualidade.
            </p>

            <div className="flex items-center gap-3 text-gray-700 bg-white p-4 rounded-lg shadow-sm inline-block">
              <MapPin className="text-primary" />
              <span className="font-medium">Atendimento em Santo André - SP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
