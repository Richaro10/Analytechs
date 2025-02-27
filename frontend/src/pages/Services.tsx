import React from 'react';
import { BarChart2, Database, TrendingUp, Code2, LineChart, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const Services = () => {
  const location = useLocation();

  const services = [
    {
      icon: <BarChart2 className="h-12 w-12 text-accent" />,
      title: "Business Intelligence",
      description: "Transformez vos données en insights actionnables avec nos solutions BI sur mesure.",
      features: [
        "Tableaux de bord interactifs",
        "Reporting automatisé",
        "KPIs personnalisés",
        "Intégration multi-sources"
      ],
      benefits: [
        "Prise de décision éclairée",
        "Optimisation des processus",
        "Gain de temps significatif",
        "ROI mesurable"
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-accent" />,
      title: "Data Analytics",
      description: "Exploitez la puissance de vos données avec des analyses avancées.",
      features: [
        "Analyse prédictive",
        "Machine Learning",
        "Big Data",
        "Data Mining"
      ],
      benefits: [
        "Prédictions précises",
        "Automatisation intelligente",
        "Insights avancés",
        "Avantage concurrentiel"
      ]
    },
    {
      icon: <Code2 className="h-12 w-12 text-accent" />,
      title: "Développement d'Applications",
      description: "Des solutions logicielles sur mesure pour répondre à vos besoins spécifiques.",
      features: [
        "Applications web",
        "Applications mobiles",
        "APIs",
        "Intégrations"
      ],
      benefits: [
        "Solutions personnalisées",
        "Performance optimale",
        "Scalabilité garantie",
        "Maintenance simplifiée"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-accent" />,
      title: "Conseil en Management",
      description: "Optimisez votre stratégie d'entreprise avec nos conseils experts.",
      features: [
        "Stratégie digitale",
        "Optimisation des processus",
        "Gestion du changement",
        "Formation"
      ],
      benefits: [
        "Vision claire",
        "Efficacité accrue",
        "Équipes alignées",
        "Objectifs atteints"
      ]
    },
    {
      icon: <LineChart className="h-12 w-12 text-accent" />,
      title: "Contrôle de Gestion",
      description: "Pilotez votre performance financière et opérationnelle.",
      features: [
        "Tableaux de bord financiers",
        "Analyse des coûts",
        "Budgétisation",
        "Prévisions"
      ],
      benefits: [
        "Meilleure rentabilité",
        "Coûts maîtrisés",
        "Décisions éclairées",
        "Croissance durable"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: "Webmarketing",
      description: "Développez votre présence en ligne et attirez plus de clients.",
      features: [
        "SEO",
        "Marketing digital",
        "Analyse de données",
        "Stratégie de contenu"
      ],
      benefits: [
        "Visibilité accrue",
        "Trafic qualifié",
        "Conversion optimisée",
        "ROI maximisé"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageBanner
        title="Nos Services"
        subtitle="Des solutions complètes pour votre transformation digitale"
        badge="Solutions Expertes"
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-[100%] transition-all duration-300 group-hover:scale-150"></div>
              
              {/* Content */}
              <div className="relative p-8">
                <div className="text-accent group-hover:text-primary transition-colors duration-300">
                  <div className="bg-accent/5 p-4 rounded-2xl inline-block transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/5">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mt-6 mb-4 text-primary">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral mb-3">Fonctionnalités</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral mb-3">Bénéfices</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA */}
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
    </div>
  );
};

export default Services;