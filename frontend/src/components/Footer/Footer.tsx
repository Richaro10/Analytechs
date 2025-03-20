import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUp } from 'lucide-react';
import Logo from '../Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-white relative overflow-hidden">
      {/* Formes géométriques décoratives */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Forme 1 - Grand cercle gradient */}
        <div className="absolute -right-48 -top-48 w-[800px] h-[800px] bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-[100px]"></div>
        
        {/* Forme 2 - Triangle lumineux */}
        <div className="absolute -left-64 top-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/25 to-transparent transform rotate-45"></div>
        
        {/* Forme 3 - Cercle brillant */}
        <div className="absolute right-1/4 bottom-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[60px]"></div>
        
        {/* Forme 4 - Rectangle incliné */}
        <div className="absolute left-1/4 -bottom-32 w-[600px] h-64 bg-gradient-to-r from-secondary/20 via-primary/10 to-transparent transform -rotate-12"></div>
        
        {/* Motif de points */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        
        {/* Lignes géométriques */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #FFFFFF 1px, transparent 1px),
              linear-gradient(-45deg, #FFFFFF 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* À propos */}
          <div className="space-y-6">
            <div className="relative group">
              {/* Effet de halo lumineux permanent */}
              <div className="absolute -inset-2 bg-gradient-to-r from-white/40 via-secondary/60 to-white/40 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* Container du logo avec fond en verre et bordure lumineuse */}
              <div className="relative bg-white/40 p-6 rounded-xl backdrop-blur-md border border-white/50 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-white/50 hover:border-white/70 group overflow-hidden">
                {/* Logo avec effet de brillance */}
                <div className="relative z-10">
                  <Logo className="text-white" />
                  
                  {/* Effet de brillance animé permanent */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shine"
                    style={{
                      maskImage: 'linear-gradient(to right, transparent, white, transparent)'
                    }}
                  ></div>
                </div>

                {/* Reflets dynamiques permanents */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-white/20 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
              </div>
            </div>

            <p className="text-white/90 leading-relaxed backdrop-blur-sm">
              Leader en solutions de Business Intelligence et Data Analytics au Burkina Faso. Expertise locale, vision globale pour accompagner votre transformation digitale.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/analytechs-burkina"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-secondary/20 transition-colors p-2 rounded-lg group backdrop-blur-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white group-hover:text-white" />
              </a>
              <a 
                href="https://twitter.com/analytechsbf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-secondary/20 transition-colors p-2 rounded-lg group backdrop-blur-sm"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-white group-hover:text-white" />
              </a>
              <a 
                href="https://facebook.com/analytechsbf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-secondary/20 transition-colors p-2 rounded-lg group backdrop-blur-sm"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Liens utiles */}
          <div className="backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-6 text-white">Services au Burkina Faso</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services" className="text-white/90 hover:text-secondary transition-colors flex items-center group">
                  <span className="h-1.5 w-1.5 bg-white group-hover:bg-secondary rounded-full mr-2"></span>
                  Développement Web à Ouagadougou
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/90 hover:text-secondary transition-colors flex items-center group">
                  <span className="h-1.5 w-1.5 bg-white group-hover:bg-secondary rounded-full mr-2"></span>
                  Business Intelligence Afrique de l'Ouest
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/90 hover:text-secondary transition-colors flex items-center group">
                  <span className="h-1.5 w-1.5 bg-white group-hover:bg-secondary rounded-full mr-2"></span>
                  Data Analytics Burkina
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/90 hover:text-secondary transition-colors flex items-center group">
                  <span className="h-1.5 w-1.5 bg-white group-hover:bg-secondary rounded-full mr-2"></span>
                  Conseil en Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/90 hover:text-secondary transition-colors flex items-center group">
                  <span className="h-1.5 w-1.5 bg-white group-hover:bg-secondary rounded-full mr-2"></span>
                  Formation Professionnelle
                </Link>
              </li>
            </ul>
          </div>

          {/* Contactez-nous */}
          <div className="backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-6 text-white">Contactez-nous</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-white/90 hover:text-secondary transition-colors group">
                <MapPin className="h-5 w-5 mr-3 text-white group-hover:text-secondary" />
                <p>
                  Avenue Kwame N'Krumah<br />
                  Ouagadougou, Burkina Faso
                </p>
              </li>
              <li>
                <a href="tel:+22625000000" className="flex items-center text-white/90 hover:text-secondary transition-colors group">
                  <Phone className="h-5 w-5 mr-3 text-white group-hover:text-secondary" />
                  +226 25 00 00 00
                </a>
              </li>
              <li>
                <a href="mailto:contact@analytechs.tech" className="flex items-center text-white/90 hover:text-secondary transition-colors group">
                  <Mail className="h-5 w-5 mr-3 text-white group-hover:text-secondary" />
                  contact@analytechs.tech
                </a>
              </li>
              <li className="text-white/90">
                <span className="font-semibold">Horaires :</span><br />
                Lun - Ven: 8:00 - 17:00
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-6 text-white">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-white/90 hover:text-secondary transition-colors flex items-center group">
                  <span className="h-1.5 w-1.5 bg-white group-hover:bg-secondary rounded-full mr-2"></span>
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/90 hover:text-secondary transition-colors flex items-center group">
                  <span className="h-1.5 w-1.5 bg-white group-hover:bg-secondary rounded-full mr-2"></span>
                  Blog et Actualités
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/90 hover:text-secondary transition-colors flex items-center group">
                  <span className="h-1.5 w-1.5 bg-white group-hover:bg-secondary rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-white/90 hover:text-secondary transition-colors flex items-center group">
                  <span className="h-1.5 w-1.5 bg-white group-hover:bg-secondary rounded-full mr-2"></span>
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/politique-de-confidentialite" className="text-white/90 hover:text-secondary transition-colors flex items-center group">
                  <span className="h-1.5 w-1.5 bg-white group-hover:bg-secondary rounded-full mr-2"></span>
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-white/20 relative backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/90 text-sm">
              © {new Date().getFullYear()} Analytechs Burkina Faso. Tous droits réservés.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <button
                type="button"
                onClick={scrollToTop}
                className="bg-secondary hover:bg-primary text-white p-3 rounded-lg transition-colors cursor-pointer hover:scale-105 transform duration-200 shadow-lg hover:shadow-secondary/20"
                aria-label="Retour en haut"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;