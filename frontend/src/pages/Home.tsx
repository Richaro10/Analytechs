import React from 'react';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import Clients from '../components/Clients';
import { ArrowRight, Award, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Solutions />
      <Clients />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute -right-48 -top-48 w-[800px] h-[800px] bg-white/10 rounded-full blur-[100px]"></div>
          <div className="absolute -left-48 bottom-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-grid-white/10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              Contactez-nous dès aujourd'hui pour discuter de vos projets et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-white text-primary hover:bg-accent hover:text-white px-8 py-4 rounded-full transition-colors group font-medium"
            >
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;