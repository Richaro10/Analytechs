import React from 'react';
import { useContent } from '../hooks/useContent';
import { Award, ExternalLink } from 'lucide-react';

const Clients = () => {
  const projects = [
    {
      company: "Média-Participations",
      url: "https://www.media-participations.com/",
      project: "Migration de données/Refonte SI de Gestion de droit d'auteur",
      role: "Analyste/Concepteur/Développeur Talend - SQL",
      logo: "/src/assets/logos/media-participations.svg",
      achievements: [
        "Modélisation de données (tiers, PIM, contrats d'édition)",
        "Développement de flux de données",
        "Assistance utilisateur et correction de données"
      ]
    },
    {
      company: "Groupe Acorus",
      url: "https://www.groupe-acorus.fr/",
      project: "Mise en place d'un socle BI et aide au reporting/analyses",
      role: "Ingénieur BI",
      logo: "/src/assets/logos/acorus.svg",
      achievements: [
        "Architecture BI et traitements Talend",
        "Applications Toucan Toco pour suivi d'activité",
        "Tableaux de bord sous Tableau Software"
      ]
    },
    {
      company: "Ouest-France",
      url: "https://www.ouest-france.fr/",
      project: "Centre de service Data",
      role: "Ingénieur Data/BI-Big Data",
      logo: "/src/assets/logos/ouest-france.svg",
      achievements: [
        "Développement Python et traitement de données",
        "Administration Hortonworks/Ambari",
        "Dashboards Kibana et flux Elasticsearch"
      ]
    },
    {
      company: "ASI",
      url: "https://www.asi.fr/",
      project: "Datalab - Analyse de sentiment Twitter",
      role: "Ingénieur Data",
      logo: "/src/assets/logos/asi.svg",
      achievements: [
        "Mise en place d'une VM Linux",
        "Collecte de données Twitter via Logstash",
        "Stockage sous fichiers plats",
        "Restitution via Qlik"
      ]
    },
    {
      company: "EVOLUTION",
      url: "https://evolution-xy.fr/",
      project: "Maintenance évolutive et assistance utilisateurs",
      role: "Consultant décisionnel",
      logo: "/src/assets/logos/evolution.svg",
      achievements: [
        "Maintien en condition opérationnelle (MCO)",
        "Evolution des flux existants",
        "Recette et traitement des retours",
        "Assistance utilisateurs"
      ]
    },
    {
      company: "GROUPAMA Loire Bretagne",
      url: "https://www.groupama.fr/regions/loire-bretagne/",
      project: "Maintenance évolutive de flux ETL/ELT",
      role: "Chargé d'études",
      logo: "/src/assets/logos/groupama.svg",
      achievements: [
        "Enrichissement de flux existants",
        "Développement de nouveaux flux",
        "Recette technique",
        "Livraison et traitement de retour de recette métiers"
      ]
    },
    {
      company: "COVEA Finance",
      url: "https://www.covea-finance.fr/",
      project: "Migration SAP BusinessObjects",
      role: "Consultant BI",
      logo: "/src/assets/logos/covea.svg",
      achievements: [
        "Migration des composants BO",
        "Assistance à la recette",
        "Support aux utilisateurs"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos Réalisations</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-6">
            Projets Réalisés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un aperçu des projets significatifs sur lesquels nous avons travaillé
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 h-[400px] flex flex-col"
            >
              <div className="flex flex-col gap-6 h-full">
                <div className="w-24 h-24 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 p-4">
                  <img 
                    src={project.logo} 
                    alt={`Logo ${project.company}`}
                    loading="lazy" 
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-4 items-center mb-3">
                    <h3 className="text-xl font-semibold text-primary">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors inline-flex items-center gap-2"
                      >
                        {project.company}
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </h3>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {project.role}
                    </span>
                  </div>
                  
                  <p className="text-base text-gray-700 mb-4">
                    {project.project}
                  </p>
                  
                  <ul className="space-y-2 mt-auto">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Award className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;