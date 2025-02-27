//import React from 'react';
import { ArrowRight, BarChart2, Database, TrendingUp, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../hooks/useContent';
import type { Hero as HeroContent } from '../types/content';

const Hero = () => {
  const { data: content, loading } = useContent<HeroContent>('hero');

  if (loading) {
    return (
      <div className="relative bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] pt-24 min-h-[600px] animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="h-8 bg-white/20 rounded w-2/3 mb-4"></div>
          <div className="h-4 bg-white/20 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] pt-24 overflow-hidden">
      {/* Éléments de fond dynamiques */}
      <div className="absolute inset-0">
        {/* Image de fond avec overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel avec effets */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300">
              Leader en solutions Data & Management
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#D97706] animate-gradient-x">
              Transformez vos données en décisions stratégiques
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed backdrop-blur-sm">
              Analytechs vous accompagne dans votre transformation digitale avec des solutions sur mesure en Business Intelligence, Data Analytics et Conseil en Management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="group bg-gradient-to-r from-[#D97706] to-[#D97706] hover:from-[#D97706] hover:to-[#3B82F6] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-[#D97706]/50"
              >
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="relative overflow-hidden border-2 border-white/80 text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-primary transition-all duration-300 text-center group"
              >
                <span className="relative z-10">Découvrir nos services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>
            </div>
          </div>

          {/* Grille de services avec effets de profondeur */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: <BarChart2 className="h-8 w-8" />,
                title: "Business Intelligence",
                description: "Visualisez vos données pour une prise de décision éclairée"
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: "Data Analytics",
                description: "Exploitez la puissance de vos données"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Conseil en Management",
                description: "Optimisez votre stratégie d'entreprise"
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Innovation",
                description: "Adoptez les dernières technologies"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Contenu de la carte */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#D97706] to-[#3B82F6] p-4 rounded-xl inline-block mb-4 text-white transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Transition vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
};

export default Hero;