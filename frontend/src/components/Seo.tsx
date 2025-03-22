// 📁 src/lib/seo.ts

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

// ✅ Métadonnées SEO par défaut (utilisées si aucune surcharge n’est fournie)
export const defaultMeta = {
  title: "Analytechs Burkina Faso - Data & Dev & Management",
  description: "Solutions innovantes de Business Intelligence, Data Analytics et Conseil en Management à Ouagadougou.",
  keywords: "business intelligence burkina faso, data analytics ouagadougou, conseil management afrique ouest, analytechs burkina, data science burkina faso",
  url: "https://analytechs.tech", // domaine principal du site
  locale: "fr_BF",
  siteName: "Analytechs Burkina Faso",
  type: "website",
  image: "https://analytechs.tech/og-image.jpg", // image OpenGraph par défaut
};

// ✅ Fonction utilitaire pour fusionner les métadonnées
export function generateMeta(overrides: Partial<typeof defaultMeta> = {}) {
  return {
    ...defaultMeta,
    ...overrides,
  };
}

// ✅ Composant SEO réutilisable dans chaque page
interface SeoProps extends Partial<typeof defaultMeta> {
  canonical?: string; // URL canonique de la page (important pour éviter le contenu dupliqué)
  links?: { rel: string; href: string }[]; // balises <link rel="prev/next"> pour la pagination
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  keywords,
  image,
  canonical,
  links = [],
}) => {
  const location = useLocation();
  const meta = generateMeta({ title, description, keywords, image });

  return (
    <Helmet>
      {/* ✅ Balises classiques */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />

      {/* ✅ Open Graph pour les réseaux sociaux */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:url" content={`${meta.url}${location.pathname}`} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:locale" content={meta.locale} />
      <meta property="og:image" content={meta.image} />

      {/* ✅ Canonical URL (important pour le SEO avancé) */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* ✅ Pagination SEO (rel=prev / rel=next) */}
      {links.map((link) => (
        <link key={link.href} rel={link.rel} href={link.href} />
      ))}
    </Helmet>
  );
};
