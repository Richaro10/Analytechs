import React from 'react';
import { useLocation } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { Seo } from '../components/Seo'; // ✅ Composant SEO réutilisable
import { defaultMeta } from '../components/Seo'; // ✅ Métadonnées par défaut

const LegalNotice = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ SEO dynamique via composant SEO */}
      <Seo
        title={`Mentions Légales - ${defaultMeta.siteName}`}
        description="Mentions légales officielles d'Analytechs Burkina Faso, incluant les informations de contact, l'hébergeur et la politique de confidentialité."
        url={`${defaultMeta.url}${location.pathname}`}
        image={defaultMeta.image}
      />

      <PageBanner
        title="Mentions Légales"
        subtitle="Informations légales concernant Analytechs Burkina Faso"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Informations légales</h2>
          <p>
            Analytechs Burkina Faso<br />
            Avenue Kwame N'Krumah<br />
            Ouagadougou, Burkina Faso<br />
            Tél : +226 25 00 00 00<br />
            Email : contact@analytechs.tech
          </p>

          <h3>Directeur de la publication</h3>
          <p>M. John DOE, Directeur Général</p>

          <h3>Hébergement</h3>
          <p>
            Le site analytechs.tech est hébergé par :<br />
            Société X<br />
            Adresse de l'hébergeur<br />
            Contact hébergeur
          </p>

          <h3>Propriété intellectuelle</h3>
          <p>
            L'ensemble de ce site relève de la législation burkinabè et internationale
            sur le droit d'auteur et la propriété intellectuelle. Tous les droits de
            reproduction sont réservés, y compris pour les documents téléchargeables
            et les représentations iconographiques et photographiques.
          </p>

          <h3>Données personnelles</h3>
          <p>
            Les informations recueillies sur ce site sont traitées selon les dispositions
            de la loi n°001-2021/AN du 30 mars 2021 portant protection des personnes
            à l'égard du traitement des données à caractère personnel au Burkina Faso.
          </p>

          <h3>Cookies</h3>
          <p>
            Ce site utilise des cookies pour améliorer l'expérience utilisateur.
            En continuant à naviguer sur ce site, vous acceptez leur utilisation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
