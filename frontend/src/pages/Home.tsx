import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import Clients from '../components/Clients';
import { Seo } from '../components/Seo'; // ✅ Composant SEO réutilisable
import { defaultMeta } from '../components/Seo'; // ✅ Métadonnées par défaut

const Home = () => {
  const location = useLocation();

  return (
    <div className="overflow-hidden">
      {/* ✅ SEO dynamique via composant réutilisable */}
      <Seo
        title={`Accueil - ${defaultMeta.siteName}`}
        description="Analytechs Burkina Faso - Business Intelligence, Data Analytics, Conseil en Management à Ouagadougou."
        url={`${defaultMeta.url}${location.pathname}`}
        image={defaultMeta.image}
      />

      {/* ✅ Sections principales */}
      <Hero />
      <Solutions />
      <Clients />

      {/* ✅ Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        {/* ✅ Décorations visuelles */}
        <div className="absolute inset-0">
          <div className="absolute -right-48 -top-48 w-[800px] h-[800px] bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute -left-48 bottom-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-grid-white/10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Contactez-nous dès aujourd'hui pour discuter de vos projets et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-primary hover:bg-accent hover:text-white px-8 py-4 rounded-full transition-colors group font-medium"
            >
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
