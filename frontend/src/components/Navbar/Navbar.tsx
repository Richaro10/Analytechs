import React from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const location = useLocation();

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>
            <div className="hidden md:ml-8 md:flex md:space-x-8">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-md text-base font-extrabold tracking-wide transition-colors ${
                  isActivePage('/') 
                    ? 'text-accent' 
                    : 'text-gray-700 hover:text-accent'
                }`}
              >
                Accueil
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-2 rounded-md text-base font-extrabold tracking-wide transition-colors ${
                  isActivePage('/about') 
                    ? 'text-accent' 
                    : 'text-gray-700 hover:text-accent'
                }`}
              >
                À propos
              </Link>
              <Link 
                to="/services" 
                className={`px-4 py-2 rounded-md text-base font-extrabold tracking-wide transition-colors ${
                  isActivePage('/services') 
                    ? 'text-accent' 
                    : 'text-gray-700 hover:text-accent'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/blog" 
                className={`px-4 py-2 rounded-md text-base font-extrabold tracking-wide transition-colors ${
                  isActivePage('/blog') 
                    ? 'text-accent' 
                    : 'text-gray-700 hover:text-accent'
                }`}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className={`px-4 py-2 rounded-md text-base font-extrabold tracking-wide transition-colors ${
                  isActivePage('/contact') 
                    ? 'text-accent' 
                    : 'text-gray-700 hover:text-accent'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Barre de recherche - Version desktop */}
            <div className="hidden md:flex items-center relative">
              <div className={`transition-all duration-300 ${isSearchOpen ? 'w-64' : 'w-40'}`}>
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                  onFocus={() => setIsSearchOpen(true)}
                  onBlur={() => setIsSearchOpen(false)}
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            {/* Menu mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {/* Barre de recherche - Version mobile */}
            <div className="px-4 pb-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <Link 
              to="/" 
              className={`block px-4 py-2 rounded-md text-lg font-extrabold tracking-wide ${
                isActivePage('/') 
                  ? 'text-accent bg-accent/10' 
                  : 'text-gray-700 hover:text-accent hover:bg-gray-50'
              } transition-colors`}
            >
              Accueil
            </Link>
            <Link 
              to="/about" 
              className={`block px-4 py-2 rounded-md text-lg font-extrabold tracking-wide ${
                isActivePage('/about') 
                  ? 'text-accent bg-accent/10' 
                  : 'text-gray-700 hover:text-accent hover:bg-gray-50'
              } transition-colors`}
            >
              À propos
            </Link>
            <Link 
              to="/services" 
              className={`block px-4 py-2 rounded-md text-lg font-extrabold tracking-wide ${
                isActivePage('/services') 
                  ? 'text-accent bg-accent/10' 
                  : 'text-gray-700 hover:text-accent hover:bg-gray-50'
              } transition-colors`}
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className={`block px-4 py-2 rounded-md text-lg font-extrabold tracking-wide ${
                isActivePage('/blog') 
                  ? 'text-accent bg-accent/10' 
                  : 'text-gray-700 hover:text-accent hover:bg-gray-50'
              } transition-colors`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`block px-4 py-2 rounded-md text-lg font-extrabold tracking-wide ${
                isActivePage('/contact') 
                  ? 'text-accent bg-accent/10' 
                  : 'text-gray-700 hover:text-accent hover:bg-gray-50'
              } transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;