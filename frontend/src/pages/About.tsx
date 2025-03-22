import React from 'react';
import { useLocation } from 'react-router-dom';
import { Lightbulb, Target, Users, Shield, Rocket, Award, CheckCircle } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import type { AboutSection } from '../types/content';
import PageBanner from '../components/PageBanner';
import { Seo } from '../components/Seo'; // ✅ On importe le composant SEO réutilisable
import { defaultMeta } from '../components/Seo'; // ✅ On importe les métadonnées par défaut

// ✅ Mappage des icônes dynamiques pour les valeurs
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
  const { data: response, loading } = useContent<AboutSection>('about');

  // ✅ Contenu fallback si l'API ne répond pas
  const defaultValues: AboutSection = {
    data: {
      id: 1,
      attributes: {
        vision: "Notre vision est d'être le leader en solutions data au Burkina Faso",
        values: [
          { icon: 'Lightbulb', title: 'Innovation', description: 'Exploration constante de nouvelles technologies.' },
          { icon: 'Target', title: 'Excellence', description: 'Engagement qualité et performance.' },
          { icon: 'Users', title: 'Collaboration', description: 'Travail d’équipe et partenariats durables.' },
          { icon: 'Shield', title: 'Intégrité', description: 'Transparence et éthique professionnelle.' },
          { icon: 'Rocket', title: 'Agilité', description: 'Approche flexible pour s’adapter au marché.' },
          { icon: 'Award', title: 'Expertise', description: 'Professionnels qualifiés pour chaque défi.' }
        ],
        expertise: [
          { title: 'Business Intelligence', description: 'Insights décisionnels à partir de vos données.' },
          { title: 'Data Analytics', description: 'Analyses avancées et machine learning.' },
          { title: 'Conseil en Management', description: 'Stratégie et accompagnement personnalisé.' }
        ]
      }
    }
  };

  const content = response || defaultValues;

  if (loading) return <div className="min-h-screen bg-white">Chargement...</div>;

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ SEO dynamique via composant SEO réutilisable */}
      <Seo
        title={`À propos - ${defaultMeta.siteName}`}
        description="Découvrez notre vision, nos valeurs et notre expertise en Business Intelligence au Burkina Faso."
        url={`${defaultMeta.url}${location.pathname}`}
        image={defaultMeta.image}
      />

      <PageBanner
        title="À propos d'Analytechs"
        subtitle="Découvrez notre vision et nos valeurs pour la transformation digitale"
        badge="Notre Vision & Expertise"
        backgroundImage="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Vision */}
        <div className="mb-20">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Notre Vision</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-8">{content.data.attributes.vision}</h2>
        </div>

        {/* Valeurs */}
        <div className="mb-20">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos Valeurs</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-8">Ce qui nous définit</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.data.attributes.values.map((value, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100">
                <div className="relative">
                  <div className="bg-accent/5 p-4 rounded-2xl inline-block mb-4">{iconMap[value.icon]}</div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Notre Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-4 mb-8">Une expertise reconnue</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.data.attributes.expertise.map((expertise, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="bg-accent/5 p-4 rounded-2xl inline-block mb-4">
                  <Award className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-2">{expertise.title}</h3>
                <p className="text-gray-600">{expertise.description}</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-5 w-5 text-accent mr-2" />Sur mesure</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-5 w-5 text-accent mr-2" />Expertise pointue</li>
                  <li className="flex items-center text-gray-600"><CheckCircle className="h-5 w-5 text-accent mr-2" />Résultats mesurables</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
