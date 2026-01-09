import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-serif text-primary font-bold">NG</span>
            <span className="ml-2 text-gray-700 font-medium hidden sm:block">Nathalia Gonzaga</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <a
              href="https://www.instagram.com/nathaliag_naildesigner/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-pink-700 transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-600 hover:text-primary hover:bg-pink-50 rounded-md font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://www.instagram.com/nathaliag_naildesigner/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-primary font-medium"
            >
              Siga no Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
