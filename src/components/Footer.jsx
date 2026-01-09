import React from 'react';
import { Phone, MapPin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const whatsappMessage = encodeURIComponent("Olá, gostaria de agendar uma unha contigo podemos agendar uma data e horario?");
  const whatsappLink = `https://wa.me/5511987557611?text=${whatsappMessage}`;

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-primary">Nathalia Gonzaga</h3>
            <p className="text-gray-400">
              Renovando sua autoestima e trazendo mais beleza para o seu dia a dia através das unhas.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors"
            >
              <Phone size={20} />
              <span>+55 11 98755-7611</span>
            </a>
            <div className="flex items-center space-x-3 text-gray-400">
              <MapPin size={20} />
              <span>Santo André - SP</span>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
            <a
              href="https://www.instagram.com/nathaliag_naildesigner/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-pink-500 transition-colors"
            >
              <Instagram size={24} />
              <span>@nathaliag_naildesigner</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Nathalia Gonzaga Nail Designer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
