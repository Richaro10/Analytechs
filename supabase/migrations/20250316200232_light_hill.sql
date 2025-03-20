/*
  # Ajout d'articles de blog supplémentaires

  1. Contenu
    - Ajout de 7 nouveaux articles
    - Contenu détaillé et structuré
    - Images d'illustration
*/

DO $$
DECLARE
  author_id uuid;
BEGIN
  SELECT id INTO author_id FROM blog_authors WHERE email = 'admin@analytechs.tech';

  -- Insertion des articles supplémentaires
  INSERT INTO blog_posts (slug, title, content, excerpt, image_url, published, author_id)
  VALUES
    (
      'big-data-tendances-2024',
      'Les grandes tendances du Big Data en 2024',
      E'## Les tendances Big Data qui façonnent 2024\n\n
      1. Edge Computing\n
      - Traitement en temps réel\n
      - Réduction de la latence\n
      - Économies de bande passante\n\n
      2. Intelligence Artificielle\n
      - AutoML\n
      - Deep Learning\n
      - IA explicable\n\n
      3. Data Mesh\n
      - Architecture décentralisée\n
      - Gouvernance distribuée\n
      - Autonomie des domaines\n\n
      4. DataOps\n
      - Automatisation\n
      - Collaboration\n
      - Qualité des données',
      'Découvrez les technologies et pratiques qui façonnent l''avenir du Big Data cette année.',
      'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d',
      true,
      author_id
    ),
    (
      'data-governance-best-practices',
      'Meilleures pratiques en gouvernance des données',
      E'## Guide de gouvernance des données\n\n
      ### 1. Organisation\n
      - Rôles et responsabilités\n
      - Comité de gouvernance\n
      - Processus de décision\n\n
      ### 2. Qualité des données\n
      - Standards de qualité\n
      - Processus de validation\n
      - Monitoring continu\n\n
      ### 3. Sécurité\n
      - Classification des données\n
      - Contrôles d''accès\n
      - Audit et traçabilité',
      'Guide complet pour mettre en place une gouvernance des données efficace et conforme aux réglementations.',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3',
      true,
      author_id
    ),
    (
      'machine-learning-predictif',
      'Machine Learning : Prédire pour mieux décider',
      E'## Le Machine Learning au service de la décision\n\n
      ### Applications\n
      - Prévision des ventes\n
      - Détection des fraudes\n
      - Maintenance prédictive\n\n
      ### Méthodologie\n
      1. Préparation des données\n
      2. Choix du modèle\n
      3. Entraînement\n
      4. Évaluation\n
      5. Déploiement',
      'Comment le machine learning transforme l''analyse prédictive et améliore la prise de décision.',
      'https://images.unsplash.com/photo-1527474305487-b87b222841cc',
      true,
      author_id
    ),
    (
      'data-visualisation-storytelling',
      'L''art du Data Storytelling',
      E'## Raconter des histoires avec les données\n\n
      ### Principes clés\n
      - Contexte\n
      - Narration\n
      - Visualisation\n\n
      ### Techniques\n
      1. Choix des graphiques\n
      2. Mise en forme\n
      3. Interactivité\n
      4. Annotations',
      'Comment transformer vos données en histoires impactantes pour une meilleure communication.',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      true,
      author_id
    ),
    (
      'real-time-analytics',
      'L''analyse en temps réel : Un avantage compétitif',
      E'## L''analyse en temps réel\n\n
      ### Avantages\n
      - Réactivité accrue\n
      - Décisions immédiates\n
      - Optimisation continue\n\n
      ### Technologies\n
      - Stream processing\n
      - In-memory computing\n
      - CEP (Complex Event Processing)',
      'Les bénéfices et les défis de l''implémentation de l''analyse en temps réel dans votre stratégie data.',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      true,
      author_id
    ),
    (
      'importance-controle-gestion',
      'Le Contrôle de Gestion : Pilier de la Performance Entreprise',
      E'## Le contrôle de gestion moderne\n\n
      ### Rôles clés\n
      - Pilotage de la performance\n
      - Aide à la décision\n
      - Optimisation des coûts\n\n
      ### Outils\n
      - Tableaux de bord\n
      - Reporting financier\n
      - Analyse des écarts',
      'Découvrez pourquoi le contrôle de gestion est essentiel pour piloter efficacement votre entreprise et optimiser ses performances.',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
      true,
      author_id
    ),
    (
      'data-controle-gestion',
      'La Data : Nouveau Levier du Contrôle de Gestion',
      E'## La transformation du contrôle de gestion\n\n
      ### Impact de la data\n
      - Automatisation\n
      - Prédiction\n
      - Analyse avancée\n\n
      ### Nouveaux outils\n
      - BI temps réel\n
      - Machine learning\n
      - Visualisation interactive',
      'Comment l''exploitation des données transforme et modernise la fonction contrôle de gestion.',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      true,
      author_id
    );
END $$;