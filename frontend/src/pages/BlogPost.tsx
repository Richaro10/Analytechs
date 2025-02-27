import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import type { BlogPost as BlogPostType } from '../types/content';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: posts, loading } = useContent<BlogPostType[]>('blog-posts');

  const defaultPosts = [
    {
      id: 1,
      slug: 'importance-business-intelligence',
      title: "L'importance de la Business Intelligence dans la prise de décision",
      excerpt: "Découvrez comment la BI peut transformer votre processus de prise de décision et améliorer la performance de votre entreprise.",
      content: `
        <h2>Introduction</h2>
        <p>Dans un monde où les données sont omniprésentes, la Business Intelligence (BI) est devenue un outil indispensable pour les entreprises qui souhaitent prendre des décisions éclairées. Mais qu'est-ce que la BI exactement et comment peut-elle transformer votre processus de prise de décision ?</p>

        <h2>Qu'est-ce que la Business Intelligence ?</h2>
        <p>La Business Intelligence regroupe les technologies, applications et pratiques permettant de collecter, intégrer, analyser et présenter les données d'entreprise. L'objectif est de fournir des informations exploitables pour améliorer la prise de décision.</p>

        <h2>Les avantages de la BI</h2>
        <ul>
          <li>Prise de décision plus rapide et plus précise</li>
          <li>Meilleure compréhension des tendances du marché</li>
          <li>Optimisation des opérations</li>
          <li>Avantage concurrentiel accru</li>
        </ul>

        <h2>Comment implémenter la BI ?</h2>
        <p>L'implémentation d'une solution de BI nécessite une approche structurée :</p>
        <ol>
          <li>Définition des objectifs</li>
          <li>Identification des sources de données</li>
          <li>Choix des outils appropriés</li>
          <li>Formation des équipes</li>
          <li>Mise en place d'un processus d'amélioration continue</li>
        </ol>

        <h2>Conclusion</h2>
        <p>La Business Intelligence est bien plus qu'un simple outil technologique : c'est un véritable levier de transformation pour les entreprises qui souhaitent rester compétitives dans un environnement en constante évolution.</p>
      `,
      author: "Marie Dubois",
      date: "15 Mars 2024",
      image: {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
      }
    },
    {
      id: 2,
      slug: 'data-lakes-vs-data-warehouse',
      title: "Data Lakes vs Data Warehouse : Quel choix pour votre entreprise ?",
      excerpt: "Une analyse comparative approfondie pour vous aider à choisir la meilleure solution de stockage de données pour vos besoins.",
      content: `
        <h2>Introduction</h2>
        <p>Le choix entre un Data Lake et un Data Warehouse est crucial pour toute stratégie de données. Comprendre les différences et les cas d'usage de chaque solution est essentiel pour faire le bon choix.</p>

        <h2>Data Warehouse : La Solution Traditionnelle</h2>
        <h3>Caractéristiques</h3>
        <ul>
          <li>Structure de données définie</li>
          <li>Données transformées et nettoyées</li>
          <li>Optimisé pour les requêtes</li>
          <li>Sécurité robuste</li>
        </ul>

        <h3>Avantages</h3>
        <ul>
          <li>Performance des requêtes</li>
          <li>Qualité des données</li>
          <li>Facilité d'utilisation</li>
          <li>Gouvernance intégrée</li>
        </ul>

        <h2>Data Lake : La Solution Moderne</h2>
        <h3>Caractéristiques</h3>
        <ul>
          <li>Stockage de données brutes</li>
          <li>Structure flexible</li>
          <li>Capacité illimitée</li>
          <li>Coût optimisé</li>
        </ul>

        <h3>Avantages</h3>
        <ul>
          <li>Flexibilité maximale</li>
          <li>Analyse avancée</li>
          <li>Machine Learning</li>
          <li>Innovation facilitée</li>
        </ul>

        <h2>Critères de Choix</h2>
        <p>Facteurs à considérer :</p>
        <ol>
          <li>Nature des données</li>
          <li>Cas d'usage</li>
          <li>Budget disponible</li>
          <li>Compétences internes</li>
          <li>Évolutivité requise</li>
        </ol>

        <h2>Conclusion</h2>
        <p>Le choix entre Data Lake et Data Warehouse dépend de vos besoins spécifiques. Une approche hybride peut souvent être la meilleure solution.</p>
      `,
      author: "Thomas Martin",
      date: "12 Mars 2024",
      image: {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
      }
    },
    {
      id: 3,
      slug: 'intelligence-artificielle-entreprise',
      title: "L'IA au service de la performance entreprise",
      excerpt: "Comment l'intelligence artificielle révolutionne les processus métier et crée de la valeur ajoutée.",
      content: `
        <h2>Introduction</h2>
        <p>L'Intelligence Artificielle (IA) transforme rapidement le paysage des entreprises. Découvrons comment elle peut améliorer la performance et créer de la valeur.</p>

        <h2>Applications Concrètes</h2>
        <h3>1. Automatisation Intelligente</h3>
        <ul>
          <li>RPA avancé</li>
          <li>Traitement automatique des documents</li>
          <li>Chatbots intelligents</li>
          <li>Workflows adaptatifs</li>
        </ul>

        <h3>2. Analyse Prédictive</h3>
        <ul>
          <li>Prévision des ventes</li>
          <li>Maintenance prédictive</li>
          <li>Détection des fraudes</li>
          <li>Analyse des risques</li>
        </ul>

        <h2>Bénéfices pour l'Entreprise</h2>
        <h3>Avantages Opérationnels</h3>
        <ul>
          <li>Réduction des coûts</li>
          <li>Amélioration de la productivité</li>
          <li>Qualité accrue</li>
          <li>Décisions plus rapides</li>
        </ul>

        <h2>Mise en Œuvre</h2>
        <p>Étapes clés pour l'adoption de l'IA :</p>
        <ol>
          <li>Identification des cas d'usage</li>
          <li>Évaluation de la maturité</li>
          <li>Choix des solutions</li>
          <li>Pilotes et tests</li>
          <li>Déploiement progressif</li>
        </ol>

        <h2>Conclusion</h2>
        <p>L'IA n'est plus une option mais une nécessité pour les entreprises qui veulent rester compétitives.</p>
      `,
      author: "Sophie Bernard",
      date: "10 Mars 2024",
      image: {
        url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    },
    {
      id: 4,
      slug: 'big-data-tendances-2024',
      title: "Les grandes tendances du Big Data en 2024",
      excerpt: "Découvrez les technologies et pratiques qui façonnent l'avenir du Big Data cette année.",
      content: `
        <h2>Introduction</h2>
        <p>Le Big Data continue d'évoluer rapidement. Voici les tendances majeures qui façonnent le paysage en 2024.</p>

        <h2>Tendances Principales</h2>
        <h3>1. Edge Computing</h3>
        <ul>
          <li>Traitement en temps réel</li>
          <li>Réduction de la latence</li>
          <li>Économie de bande passante</li>
          <li>IoT optimisé</li>
        </ul>

        <h3>2. IA et Machine Learning</h3>
        <ul>
          <li>AutoML</li>
          <li>Deep Learning</li>
          <li>Apprentissage fédéré</li>
          <li>MLOps</li>
        </ul>

        <h2>Technologies Émergentes</h2>
        <h3>Solutions Innovantes</h3>
        <ul>
          <li>Data Fabric</li>
          <li>Data Mesh</li>
          <li>Lakehouse</li>
          <li>Quantum Computing</li>
        </ul>

        <h2>Impact sur les Entreprises</h2>
        <p>Transformations majeures :</p>
        <ol>
          <li>Démocratisation des données</li>
          <li>Automatisation accrue</li>
          <li>Décisions en temps réel</li>
          <li>Innovation continue</li>
        </ol>

        <h2>Conclusion</h2>
        <p>2024 marque un tournant dans l'utilisation du Big Data, avec des solutions plus accessibles et plus puissantes.</p>
      `,
      author: "Alexandre Petit",
      date: "8 Mars 2024",
      image: {
        url: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    },
    {
      id: 5,
      slug: 'data-governance-best-practices',
      title: "Meilleures pratiques en gouvernance des données",
      excerpt: "Guide complet pour mettre en place une gouvernance des données efficace et conforme aux réglementations.",
      content: `
        <h2>Introduction</h2>
        <p>La gouvernance des données est devenue cruciale pour les entreprises. Voici un guide complet des meilleures pratiques.</p>

        <h2>Fondamentaux</h2>
        <h3>Piliers de la Gouvernance</h3>
        <ul>
          <li>Qualité des données</li>
          <li>Sécurité</li>
          <li>Conformité</li>
          <li>Accessibilité</li>
        </ul>

        <h2>Mise en Place</h2>
        <p>Étapes essentielles :</p>
        <ol>
          <li>Définition des rôles</li>
          <li>Politiques et procédures</li>
          <li>Outils et technologies</li>
          <li>Formation</li>
          <li>Suivi et amélioration</li>
        </ol>

        <h2>Conclusion</h2>
        <p>Une bonne gouvernance des données est essentielle pour maximiser la valeur des données tout en minimisant les risques.</p>
      `,
      author: "Julie Dupont",
      date: "5 Mars 2024",
      image: {
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
      }
    },
    {
      id: 6,
      slug: 'machine-learning-predictif',
      title: "Machine Learning : Prédire pour mieux décider",
      excerpt: "Comment le machine learning transforme l'analyse prédictive et améliore la prise de décision.",
      content: `
        <h2>Introduction</h2>
        <p>Le Machine Learning révolutionne l'analyse prédictive. Découvrez comment l'utiliser efficacement.</p>

        <h2>Applications</h2>
        <h3>Cas d'Usage</h3>
        <ul>
          <li>Prévision des ventes</li>
          <li>Analyse des risques</li>
          <li>Segmentation client</li>
          <li>Maintenance prédictive</li>
        </ul>

        <h2>Méthodologie</h2>
        <p>Étapes clés :</p>
        <ol>
          <li>Préparation des données</li>
          <li>Choix du modèle</li>
          <li>Entraînement</li>
          <li>Validation</li>
          <li>Déploiement</li>
        </ol>

        <h2>Conclusion</h2>
        <p>Le Machine Learning est un outil puissant pour améliorer la prise de décision basée sur les données.</p>
      `,
      author: "Marc Dubois",
      date: "3 Mars 2024",
      image: {
        url: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      }
    },
    {
      id: 7,
      slug: 'data-visualisation-storytelling',
      title: "L'art du Data Storytelling",
      excerpt: "Comment transformer vos données en histoires impactantes pour une meilleure communication.",
      content: `
        <h2>Introduction</h2>
        <p>Le Data Storytelling est l'art de raconter des histoires avec les données. Découvrez comment créer des narratifs impactants.</p>

        <h2>Principes Fondamentaux</h2>
        <h3>Éléments Clés</h3>
        <ul>
          <li>Contexte</li>
          <li>Visualisation</li>
          <li>Narration</li>
          <li>Action</li>
        </ul>

        <h2>Techniques</h2>
        <p>Bonnes pratiques :</p>
        <ol>
          <li>Identifier l'audience</li>
          <li>Choisir les données pertinentes</li>
          <li>Créer une structure narrative</li>
          <li>Sélectionner les visualisations appropriées</li>
        </ol>

        <h2>Conclusion</h2>
        <p>Un bon Data Storytelling transforme les données en insights actionnables et mémorables.</p>
      `,
      author: "Emma Laurent",
      date: "1 Mars 2024",
      image: {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    },
    {
      id: 8,
      slug: 'real-time-analytics',
      title: "L'analyse en temps réel : Un avantage compétitif",
      excerpt: "Les bénéfices et les défis de l'implémentation de l'analyse en temps réel dans votre stratégie data.",
      content: `
        <h2>Introduction</h2>
        <p>L'analyse en temps réel devient un must-have pour les entreprises modernes. Découvrez pourquoi et comment l'implémenter.</p>

        <h2>Avantages</h2>
        <h3>Bénéfices Clés</h3>
        <ul>
          <li>Décisions instantanées</li>
          <li>Détection d'anomalies</li>
          <li>Optimisation continue</li>
          <li>Expérience client améliorée</li>
        </ul>

        <h2>Implémentation</h2>
        <p>Étapes essentielles :</p>
        <ol>
          <li>Évaluation des besoins</li>
          <li>Choix des technologies</li>
          <li>Architecture adaptée</li>
          <li>Monitoring</li>
        </ol>

        <h2>Conclusion</h2>
        <p>L'analyse en temps réel est un investissement crucial pour rester compétitif dans l'économie numérique.</p>
      `,
      author: "Paul Martin",
      date: "28 Février 2024",
      image: {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    },
    {
      id: 9,
      slug: 'importance-controle-gestion',
      title: "Le Contrôle de Gestion : Pilier de la Performance Entreprise",
      excerpt: "Découvrez pourquoi le contrôle de gestion est essentiel pour piloter efficacement votre entreprise et optimiser ses performances.",
      content: `
        <h2>Introduction</h2>
        <p>Le contrôle de gestion est bien plus qu'une simple fonction de surveillance financière. C'est un véritable outil de pilotage stratégique qui permet aux entreprises de maintenir leur cap tout en optimisant leurs performances.</p>

        <h2>Rôles Fondamentaux du Contrôle de Gestion</h2>
        <h3>1. Pilotage de la Performance</h3>
        <ul>
          <li>Définition et suivi des KPIs</li>
          <li>Analyse des écarts</li>
          <li>Recommandations d'actions correctives</li>
          <li>Optimisation des processus</li>
        </ul>

        <h3>2. Support à la Décision</h3>
        <ul>
          <li>Analyses prévisionnelles</li>
          <li>Simulations financières</li>
          <li>Études de rentabilité</li>
          <li>Aide au choix d'investissement</li>
        </ul>

        <h2>Outils et Méthodes</h2>
        <h3>Instruments de Pilotage</h3>
        <ul>
          <li>Tableaux de bord</li>
          <li>Reporting financier</li>
          <li>Budgets et prévisions</li>
          <li>Analyse des coûts</li>
        </ul>

        <h2>Impact sur l'Organisation</h2>
        <h3>Bénéfices Clés</h3>
        <ul>
          <li>Meilleure visibilité financière</li>
          <li>Optimisation des ressources</li>
          <li>Réduction des coûts</li>
          <li>Performance accrue</li>
        </ul>

        <h2>Mise en Place Efficace</h2>
        <p>Étapes essentielles pour un contrôle de gestion performant :</p>
        <ol>
          <li>Définition des objectifs stratégiques</li>
          <li>Identification des indicateurs pertinents</li>
          <li>Mise en place des outils de suivi</li>
          <li>Formation des équipes</li>
          <li>Révision régulière des processus</li>
        </ol>

        <h2>Défis et Solutions</h2>
        <h3>Challenges Courants</h3>
        <ul>
          <li>Résistance au changement</li>
          <li>Qualité des données</li>
          <li>Complexité des processus</li>
          <li>Adaptation aux changements</li>
        </ul>

        <h3>Solutions Proposées</h3>
        <ul>
          <li>Communication transparente</li>
          <li>Formation continue</li>
          <li>Outils adaptés</li>
          <li>Approche progressive</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Le contrôle de gestion est un levier stratégique indispensable pour toute entreprise souhaitant optimiser ses performances et assurer sa pérennité. Son importance ne cesse de croître dans un environnement économique de plus en plus complexe et compétitif.</p>
      `,
      author: "Claire Martin",
      date: "25 Février 2024",
      image: {
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    },
    {
      id: 10,
      slug: 'data-controle-gestion',
      title: "La Data : Nouveau Levier du Contrôle de Gestion",
      excerpt: "Comment l'exploitation des données transforme et modernise la fonction contrôle de gestion.",
      content: `
        <h2>Introduction</h2>
        <p>La révolution digitale transforme profondément le contrôle de gestion. L'exploitation intelligente des données ouvre de nouvelles perspectives pour un pilotage plus précis et plus proactif de la performance entreprise.</p>

        <h2>La Data au Service du Contrôle de Gestion</h2>
        <h3>1. Amélioration de la Qualité des Analyses</h3>
        <ul>
          <li>Données en temps réel</li>
          <li>Analyses prédictives</li>
          <li>Détection d'anomalies</li>
          <li>Insights automatisés</li>
        </ul>

        <h3>2. Automatisation des Processus</h3>
        <ul>
          <li>Collecte automatique des données</li>
          <li>Reporting automatisé</li>
          <li>Alertes intelligentes</li>
          <li>Dashboards dynamiques</li>
        </ul>

        <h2>Technologies Clés</h2>
        <h3>Outils Innovants</h3>
        <ul>
          <li>Business Intelligence</li>
          <li>Machine Learning</li>
          <li>Process Mining</li>
          <li>RPA (Robotic Process Automation)</li>
        </ul>

        <h2>Transformation des Pratiques</h2>
        <p>Évolutions majeures :</p>
        <ol>
          <li>Analyse prédictive des performances</li>
          <li>Simulation avancée des scénarios</li>
          <li>Monitoring en temps réel</li>
          <li>Recommandations automatisées</li>
          <li>Collaboration augmentée</li>
        </ol>

        <h2>Bénéfices Concrets</h2>
        <h3>Avantages Opérationnels</h3>
        <ul>
          <li>Réduction du temps de reporting</li>
          <li>Analyses plus précises</li>
          <li>Décisions plus rapides</li>
          <li>Meilleure anticipation</li>
        </ul>

        <h3>Avantages Stratégiques</h3>
        <ul>
          <li>Vision plus fine de la performance</li>
          <li>Meilleure gestion des risques</li>
          <li>Optimisation continue</li>
          <li>Agilité accrue</li>
        </ul>

        <h2>Mise en Œuvre</h2>
        <h3>Étapes Clés</h3>
        <ul>
          <li>Évaluation des besoins</li>
          <li>Choix des solutions</li>
          <li>Formation des équipes</li>
          <li>Gestion du changement</li>
        </ul>

        <h2>Défis et Solutions</h2>
        <h3>Challenges</h3>
        <ul>
          <li>Qualité des données</li>
          <li>Compétences requises</li>
          <li>Investissements nécessaires</li>
          <li>Transformation culturelle</li>
        </ul>

        <h3>Réponses</h3>
        <ul>
          <li>Gouvernance des données</li>
          <li>Formation continue</li>
          <li>Approche progressive</li>
          <li>Accompagnement au changement</li>
        </ul>

        <h2>Perspectives d'Avenir</h2>
        <p>Tendances émergentes :</p>
        <ul>
          <li>IA avancée</li>
          <li>Automatisation cognitive</li>
          <li>Analytics augmenté</li>
          <li>Collaboration temps réel</li>
        </ul>

        <h2>Conclusion</h2>
        <p>L'exploitation des données représente un levier majeur de transformation pour le contrôle de gestion. Cette évolution permet non seulement d'optimiser les processus existants mais aussi d'enrichir la fonction avec de nouvelles capacités d'analyse et de prévision.</p>
      `,
      author: "Sophie Dubois",
      date: "22 Février 2024",
      image: {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    }
  ];

  const post = (posts || defaultPosts).find(p => p.slug === slug);

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-48 bg-gray-200 rounded-lg mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-2xl font-bold text-neutral mb-4">Article non trouvé</h1>
          <p className="text-gray-600 mb-8">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
          <Link 
            to="/blog"
            className="inline-flex items-center text-accent hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour aux articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link  to="/blog"
            className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour aux articles
          </Link>

        <h1 className="text-4xl font-bold text-neutral mb-6">{post.title}</h1>
        
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-8">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            5 min
          </div>
        </div>

        <img 
          src={post.image.url}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

export default BlogPost;