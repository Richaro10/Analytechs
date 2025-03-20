import React from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const location = useLocation();

  const isActivePage = (path: string) => {
    if (path === '/blog') {
      return location.pathname === '/blog' || location.pathname.startsWith('/blog/');
    }
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
                className={`px-4 py-2 rounded-md text-sm uppercase font-bold tracking-wider transition-all duration-300 ${
                  isActivePage('/') 
                    ? 'text-accent scale-105 border-b-2 border-accent' 
                    : 'text-gray-700 hover:text-accent hover:scale-105'
                }`}
              >
                Accueil
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-2 rounded-md text-sm uppercase font-bold tracking-wider transition-all duration-300 ${
                  isActivePage('/about') 
                    ? 'text-accent scale-105 border-b-2 border-accent' 
                    : 'text-gray-700 hover:text-accent hover:scale-105'
                }`}
              >
                À propos
              </Link>
              <Link 
                to="/services" 
                className={`px-4 py-2 rounded-md text-sm uppercase font-bold tracking-wider transition-all duration-300 ${
                  isActivePage('/services') 
                    ? 'text-accent scale-105 border-b-2 border-accent' 
                    : 'text-gray-700 hover:text-accent hover:scale-105'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/blog" 
                className={`px-4 py-2 rounded-md text-sm uppercase font-bold tracking-wider transition-all duration-300 ${
                  isActivePage('/blog') 
                    ? 'text-accent scale-105 border-b-2 border-accent' 
                    : 'text-gray-700 hover:text-accent hover:scale-105'
                }`}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className={`px-4 py-2 rounded-md text-sm uppercase font-bold tracking-wider transition-all duration-300 ${
                  isActivePage('/contact') 
                    ? 'text-accent scale-105 border-b-2 border-accent' 
                    : 'text-gray-700 hover:text-accent hover:scale-105'
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
              className={`block px-4 py-3 rounded-md text-sm uppercase font-bold tracking-wider ${
                isActivePage('/') 
                  ? 'text-accent bg-accent/10 scale-105' 
                  : 'text-gray-700 hover:text-accent hover:bg-gray-50 hover:scale-105'
              } transition-all duration-300`}
            >
              Accueil
            </Link>
            <Link 
              to="/about" 
              className={`block px-4 py-3 rounded-md text-sm uppercase font-bold tracking-wider ${
                isActivePage('/about') 
                  ? 'text-accent bg-accent/10 scale-105' 
                  : 'text-gray-700 hover:text-accent hover:bg-gray-50 hover:scale-105'
              } transition-all duration-300`}
            >
              À propos
            </Link>
            <Link 
              to="/services" 
              className={`block px-4 py-3 rounded-md text-sm uppercase font-bold tracking-wider ${
                isActivePage('/services') 
                  ? 'text-accent bg-accent/10 scale-105' 
                  : 'text-gray-700 hover:text-accent hover:bg-gray-50 hover:scale-105'
              } transition-all duration-300`}
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className={`block px-4 py-3 rounded-md text-sm uppercase font-bold tracking-wider ${
                isActivePage('/blog') 
                  ? 'text-accent bg-accent/10 scale-105' 
                  : 'text-gray-700 hover:text-accent hover:bg-gray-50 hover:scale-105'
              } transition-all duration-300`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`block px-4 py-3 rounded-md text-sm uppercase font-bold tracking-wider ${
                isActivePage('/contact') 
                  ? 'text-accent bg-accent/10 scale-105' 
                  : 'text-gray-700 hover:text-accent hover:bg-gray-50 hover:scale-105'
              } transition-all duration-300`}
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