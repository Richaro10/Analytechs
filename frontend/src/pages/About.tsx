import React from 'react';
import { Lightbulb, Target, Users, Shield, Rocket, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useContent } from '../hooks/useContent';
import type { AboutSection } from '../types/content';
import PageBanner from '../components/PageBanner';

const iconMap: Record<string, React.ReactNode> = {
  'Lightbulb': <Lightbulb className="h-8 w-8 text-accent" />,
  'Target': <Target className="h-8 w-8 text-accent" />,
  'Users': <Users className="h-8 w-8 text-accent" />,
  'Shield': <Shield className="h-8 w-8 text-accent" />,
  'Rocket': <Rocket className="h-8 w-8 text-accent" />,
  'Award': <Award className="h-8 w-8 text-accent" />
};

const About = () => {
  const location = useLocation();
  const { data: content, loading } = useContent<AboutSection>('about');

  const defaultValues = [
    {
      icon: 'Lightbulb',
      title: "Innovation",
      description: "Nous explorons constamment les nouvelles technologies et méthodologies pour offrir des solutions avant-gardistes à nos clients."
    },
    {
      icon: 'Target',
      title: "Excellence",
      description: "Chaque projet est une opportunité de démontrer notre engagement envers la qualité et la performance exceptionnelle."
    },
    {
      icon: 'Users',
      title: "Collaboration",
      description: "Nous croyons en la force du travail d'équipe et construisons des partenariats durables avec nos clients."
    },
    {
      icon: 'Shield',
      title: "Intégrité",
      description: "La transparence et l'éthique sont au cœur de toutes nos interactions professionnelles."
    },
    {
      icon: 'Rocket',
      title: "Agilité",
      description: "Notre approche flexible nous permet de nous adapter rapidement aux besoins changeants du marché."
    },
    {
      icon: 'Award',
      title: "Expertise",
      description: "Notre équipe de professionnels qualifiés garantit des solutions optimales pour chaque défi."
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="relative bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
            <div className="max-w-3xl animate-pulse">
              <div className="h-8 bg-white/20 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-white/20 rounded w-2/3"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            {/* Loading states */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <PageBanner
        title="À propos d'Analytechs"
        subtitle="Découvrez notre vision et nos valeurs pour la transformation digitale"
        badge="Notre Histoire"
        backgroundImage="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Vision Section */}
        <div className="mb-20">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Notre Vision</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-8">
            Façonner l'avenir numérique des entreprises
          </h2>
          <div className="bg-white p-8 rounded-2xl text-gray-600 shadow-xl border border-gray-100">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                Chez Analytechs, nous croyons en la puissance des données pour transformer les entreprises. Notre mission est d'accompagner les organisations dans leur transformation digitale en leur fournissant des solutions innovantes et sur mesure qui créent une réelle valeur ajoutée.
              </p>
              
              <p className="text-xl leading-relaxed">
                Au cœur de notre approche se trouve la conviction que la data est le nouveau moteur de l'innovation et de la performance. Dans un monde où le volume de données croît de manière exponentielle, nous aidons nos clients à transformer cette masse d'informations en avantage concurrentiel tangible.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="bg-primary/5 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-primary mb-3">Collecte & Intégration</h3>
                  <p className="text-gray-600">
                    Nous mettons en place des architectures robustes pour collecter et centraliser les données de multiples sources.
                  </p>
                </div>

                <div className="bg-primary/5 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-primary mb-3">Analyse & Intelligence</h3>
                  <p className="text-gray-600">
                    Nos solutions de BI transforment les données brutes en insights actionnables pour une prise de décision éclairée.
                  </p>
                </div>

                <div className="bg-primary/5 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-primary mb-3">Innovation & Automatisation</h3>
                  <p className="text-gray-600">
                    Nous exploitons l'IA et le machine learning pour automatiser les processus et prédire les tendances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos Valeurs</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-8">
            Ce qui nous définit
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(content?.values || defaultValues).map((value, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-[100%] transition-all duration-300 group-hover:scale-150"></div>
                <div className="relative">
                  <div className="bg-accent/5 p-4 rounded-2xl inline-block transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/5">
                    {iconMap[value.icon]}
                  </div>
                  <h3 className="text-2xl font-semibold mt-6 mb-4 text-primary">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Notre Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-8">
            Une expertise reconnue
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(content?.expertise || [
              {
                title: "Business Intelligence",
                description: "Transformez vos données en insights actionnables pour prendre de meilleures décisions stratégiques."
              },
              {
                title: "Data Analytics",
                description: "Exploitez la puissance de vos données avec des analyses avancées et du machine learning."
              },
              {
                title: "Conseil en Management",
                description: "Optimisez votre stratégie d'entreprise avec nos conseils experts et notre accompagnement personnalisé."
              }
            ]).map((expertise, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group h-full flex flex-col">
                <div className="flex flex-col h-full">
                  <div className="bg-accent/5 p-4 rounded-2xl inline-block transform transition-transform duration-300 group-hover:scale-110 mb-6">
                    <Award className="h-12 w-12 text-accent group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">{expertise.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{expertise.description}</p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                      <span>Solutions sur mesure</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                      <span>Expertise pointue</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                      <span>Résultats mesurables</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;