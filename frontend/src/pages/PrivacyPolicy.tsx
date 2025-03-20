import React from 'react';
import PageBanner from '../components/PageBanner';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageBanner
        title="Politique de Confidentialité"
        subtitle="Protection de vos données personnelles"
        backgroundImage="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Protection des données personnelles</h2>
          <p>
            Conformément à la loi n°001-2021/AN du 30 mars 2021 portant protection 
            des personnes à l'égard du traitement des données à caractère personnel 
            au Burkina Faso, vous disposez d'un droit d'accès, de rectification et 
            de suppression des données vous concernant.
          </p>

          <h3>Collecte des données</h3>
          <p>
            Nous collectons les données suivantes :
          </p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Données de connexion et de navigation</li>
          </ul>

          <h3>Utilisation des données</h3>
          <p>
            Les données collectées sont utilisées pour :
          </p>
          <ul>
            <li>Répondre à vos demandes de contact</li>
            <li>Améliorer nos services</li>
            <li>Personnaliser votre expérience utilisateur</li>
            <li>Vous tenir informé de nos actualités</li>
          </ul>

          <h3>Sécurité des données</h3>
          <p>
            Nous mettons en œuvre toutes les mesures techniques et organisationnelles 
            nécessaires pour assurer la sécurité et la confidentialité de vos données 
            personnelles.
          </p>

          <h3>Durée de conservation</h3>
          <p>
            Vos données sont conservées pendant la durée nécessaire aux finalités 
            pour lesquelles elles sont collectées et traitées.
          </p>

          <h3>Vos droits</h3>
          <p>
            Vous pouvez exercer vos droits d'accès, de rectification et de suppression 
            en nous contactant à l'adresse : contact@analytechs.tech
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;