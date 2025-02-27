import React from 'react';
import { Award } from 'lucide-react';

interface PageBannerProps {
  title: string;
  subtitle: string;
  badge?: string;
  backgroundImage?: string;
}

const PageBanner = ({ title, subtitle, badge, backgroundImage }: PageBannerProps) => {
  return (
    <div className="relative bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] pt-24 overflow-hidden">
      {/* Éléments de fond dynamiques */}
      <div className="absolute inset-0">
        {/* Image de fond avec overlay */}
        {backgroundImage && (
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        )}

        {/* Cercle lumineux principal */}
        <div className="absolute -right-48 -top-48 w-[800px] h-[800px] bg-gradient-to-br from-[#D97706]/30 to-[#3B82F6]/20 rounded-full blur-[100px] animate-pulse"></div>
        
        {/* Formes géométriques animées */}
        <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-gradient-to-tr from-[#D97706]/25 to-transparent transform rotate-45 animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-[#1E3A8A]/20 rounded-full blur-[60px] animate-pulse"></div>
        
        {/* Lignes de circuit */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(217,119,6,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(217,119,6,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'moveBackground 20s linear infinite'
          }}>
        </div>

        {/* Points lumineux */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(217,119,6,0.2) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            animation: 'twinkle 2s ease-in-out infinite alternate'
          }}>
        </div>

        {/* Overlay avec dégradé dynamique */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/90 via-[#3B82F6]/80 to-[#D97706]/70 animate-gradient-x"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 mb-6">
              <Award className="h-4 w-4 mr-2" />
              {badge}
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#D97706] animate-gradient-x">
            {title}
          </h1>
          <p className="text-xl text-white/90 leading-relaxed backdrop-blur-sm">
            {subtitle}
          </p>
        </div>
      </div>
      
      {/* Transition vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
};

export default PageBanner;