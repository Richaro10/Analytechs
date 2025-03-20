import React from 'react';
import { useParams } from 'react-router-dom';
import { useContent } from '../hooks/useContent';
import type { BlogPost as BlogPostType } from '../types/content';
import PageBanner from '../components/PageBanner';
import { Calendar, Clock, User } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const { data: post, loading } = useContent<BlogPostType>(`blog-posts/${slug}`);

  if (loading) {
    return (
      <div className="min-h-screen bg-white animate-pulse">
        <div className="h-64 bg-gray-100"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="h-8 bg-gray-100 w-2/3 mb-4"></div>
          <div className="h-4 bg-gray-100 w-1/2 mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-100 w-full"></div>
            <div className="h-4 bg-gray-100 w-full"></div>
            <div className="h-4 bg-gray-100 w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <PageBanner
        title="L'importance de la gouvernance des données"
        subtitle="Guide complet pour mettre en place une gouvernance efficace"
        badge="Guide Pratique"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Meilleures pratiques</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Gouvernance des données</h3>
          <p className="text-gray-600 mb-6">Exemples de frameworks de gouvernance populaires :</p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h4 className="text-gray-900 font-semibold mb-4">DAMA-DMBOK Framework</h4>
            <ul className="space-y-2 text-gray-600">
              <li><span className="font-medium">Gestion de l'architecture :</span> Modélisation et standardisation des données</li>
              <li><span className="font-medium">Gestion de la sécurité :</span> Contrôles d'accès et protection des données sensibles</li>
              <li><span className="font-medium">Gestion de la qualité :</span> Définition et suivi des métriques de qualité</li>
              <li><span className="font-medium">Gestion du cycle de vie :</span> De la création à l'archivage des données</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h4 className="text-gray-900 font-semibold mb-4">IBM Data Governance Framework</h4>
            <ul className="space-y-2 text-gray-600">
              <li><span className="font-medium">Organisation :</span> Structure et responsabilités</li>
              <li><span className="font-medium">Politiques :</span> Règles et procédures</li>
              <li><span className="font-medium">Mesures :</span> KPIs et métriques</li>
              <li><span className="font-medium">Technologies :</span> Outils et plateformes</li>
            </ul>
          </div>

          <table className="min-w-full border border-gray-200 my-8">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 border-b text-left text-gray-900 font-semibold">Composant</th>
                <th className="px-6 py-3 border-b text-left text-gray-900 font-semibold">Rôle</th>
                <th className="px-6 py-3 border-b text-left text-gray-900 font-semibold">Exemple</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-gray-700">Data Steward</td>
                <td className="px-6 py-4 text-gray-600">Responsable qualité données</td>
                <td className="px-6 py-4 text-gray-600">Validation des règles métier</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-700">Data Owner</td>
                <td className="px-6 py-4 text-gray-600">Propriétaire des données</td>
                <td className="px-6 py-4 text-gray-600">Définition des accès</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-700">Data Council</td>
                <td className="px-6 py-4 text-gray-600">Comité de gouvernance</td>
                <td className="px-6 py-4 text-gray-600">Validation des politiques</td>
              </tr>
            </tbody>
          </table>

          <h4 className="text-xl font-semibold text-gray-800 mb-4">Mise en place d'un framework de gouvernance</h4>
          <ol className="space-y-4 mb-8">
            <li className="text-gray-700">
              <span className="font-medium">1. Évaluation de la maturité</span>
              <ul className="ml-6 mt-2 space-y-1 text-gray-600">
                <li>Audit des pratiques actuelles</li>
                <li>Identification des gaps</li>
                <li>Définition des objectifs</li>
              </ul>
            </li>
            <li className="text-gray-700">
              <span className="font-medium">2. Organisation</span>
              <ul className="ml-6 mt-2 space-y-1 text-gray-600">
                <li>Création du Data Office</li>
                <li>Attribution des rôles</li>
                <li>Définition des responsabilités</li>
              </ul>
            </li>
            <li className="text-gray-700">
              <span className="font-medium">3. Politiques et procédures</span>
              <ul className="ml-6 mt-2 space-y-1 text-gray-600">
                <li>Standards de données</li>
                <li>Processus de validation</li>
                <li>Gestion des changements</li>
              </ul>
            </li>
            <li className="text-gray-700">
              <span className="font-medium">4. Implémentation</span>
              <ul className="ml-6 mt-2 space-y-1 text-gray-600">
                <li>Déploiement des outils</li>
                <li>Formation des équipes</li>
                <li>Suivi et amélioration</li>
              </ul>
            </li>
          </ol>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h4 className="text-gray-900 font-semibold mb-4">Exemple de Succès</h4>
            <p className="text-gray-600 mb-4">Une entreprise du CAC 40 a implémenté le framework DAMA-DMBOK, résultant en :</p>
            <ul className="space-y-2 text-gray-600">
              <li>Réduction de 40% des erreurs de données</li>
              <li>Conformité RGPD améliorée de 85%</li>
              <li>Temps d'accès aux données réduit de 60%</li>
              <li>ROI de 300% sur 3 ans</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;