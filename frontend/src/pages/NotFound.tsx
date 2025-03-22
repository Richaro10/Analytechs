import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-white text-center px-4">
    <Helmet>
      <title>404 - Page introuvable | Analytechs</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <div>
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      <p className="text-gray-600 mb-6">La page que vous cherchez n'existe pas ou a été déplacée.</p>
      <a href="/" className="text-accent underline">Retour à l'accueil</a>
    </div>
  </div>
);

export default NotFound;
