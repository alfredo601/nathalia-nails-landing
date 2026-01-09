import React from 'react';
import { Instagram } from 'lucide-react';

const Gallery = () => {
  // List of images to display in the gallery
  const images = [
    '/assets/images/Image03.png',
    '/assets/images/Image04.png',
    '/assets/images/Image05.png',
    '/assets/images/Image06.png',
    '/assets/images/Image07.png',
    '/assets/images/Image08.png',
    '/assets/images/Image09.png',
    '/assets/images/Image10.png',
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Meu Trabalho
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos resultados incríveis que alcançamos. Cada detalhe é pensado para realçar a sua beleza.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img}
                alt={`Trabalho de unha ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/nathaliag_naildesigner/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <Instagram className="mr-2" size={20} />
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
