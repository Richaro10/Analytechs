import React from 'react';
import { ArrowRight, BarChart2, Database, BrainCircuit, Users2, Globe, MessageCircle, CheckCircle } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import type { Service } from '../types/content';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  'BarChart2': <BarChart2 className="h-12 w-12" />,
  'Database': <Database className="h-12 w-12" />,
  'BrainCircuit': <BrainCircuit className="h-12 w-12" />,
  'Users2': <Users2 className="h-12 w-12" />,
  'Globe': <Globe className="h-12 w-12" />,
  'MessageCircle': <MessageCircle className="h-12 w-12" />
};

const Solutions = () => {
  const { data: services, loading } = useContent<Service[]>('services');

  const defaultServices = [
    {
      icon: 'BarChart2',
      title: "Business Intelligence",
      description: "Transformez vos données en insights actionnables avec nos solutions BI sur mesure.",
      features: [
        "Tableaux de bord interactifs",
        "Reporting automatisé",
        "KPIs personnalisés",
        "Intégration multi-sources"
      ]
    },
    {
      icon: 'Database',
      title: "Data Engineering",
      description: "Construisez des pipelines de données robustes et évolutifs pour alimenter vos analyses.",
      features: [
        "ETL & Data Pipeline",
        "Data Warehouse",
        "Data Lake",
        "Data Quality"
      ]
    },
    {
      icon: 'BrainCircuit',
      title: "Intelligence Artificielle",
      description: "Exploitez la puissance du Machine Learning pour prédire les tendances et optimiser vos processus.",
      features: [
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Computer Vision"
      ]
    },
    {
      icon: 'Users2',
      title: "Formation & Accompagnement",
      description: "Montez en compétence avec nos programmes de formation personnalisés.",
      features: [
        "Formation sur mesure",
        "Coaching",
        "Workshops",
        "Support continu"
      ]
    },
    {
      icon: 'Globe',
      title: "Webmarketing",
      description: "Optimisez votre présence en ligne avec des stratégies data-driven et des campagnes performantes.",
      features: [
        "SEO & SEA",
        "Social Media",
        "Content Marketing",
        "Analytics"
      ]
    },
    {
      icon: 'MessageCircle',
      title: "Développement d'Applications & Sites Web",
      description: "Des solutions logicielles sur mesure pour répondre à vos besoins spécifiques.",
      features: [
        "Applications web",
        "Applications mobiles",
        "APIs",
        "Intégrations"
      ]
    }
  ];

  const displayServices = services || defaultServices;

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg animate-pulse">
                <div className="h-12 w-12 bg-gray-200 rounded-full mb-6"></div>
                <div className="h-6 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos Solutions</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-6">
            Des solutions innovantes pour votre transformation digitale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nos services peuvent vous aider à atteindre vos objectifs business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-[100%] transition-all duration-300 group-hover:scale-150"></div>
              
              <div className="relative">
                <div className="text-accent group-hover:text-primary transition-colors duration-300">
                  <div className="bg-accent/5 p-4 rounded-2xl inline-block transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/5">
                    {iconMap[service.icon]}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mt-6 mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-accent hover:text-primary transition-colors group-hover:translate-x-2 transform transition-transform"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;