/*
  # Ajout des articles de blog

  1. Contenu
    - Ajout d'articles de blog avec leur contenu complet
    - Catégorisation des articles
    - Attribution des auteurs
  
  2. Données
    - Articles sur la BI, Data Analytics, et Management
    - Contenu détaillé et structuré
    - Images d'illustration
*/

-- Création d'un auteur par défaut si non existant
INSERT INTO blog_authors (name, email, bio)
SELECT 'Admin', 'admin@analytechs.tech', 'Administrateur du blog'
WHERE NOT EXISTS (
  SELECT 1 FROM blog_authors WHERE email = 'admin@analytechs.tech'
);

-- Récupération de l'ID de l'auteur
DO $$
DECLARE
  author_id uuid;
BEGIN
  SELECT id INTO author_id FROM blog_authors WHERE email = 'admin@analytechs.tech';

  -- Insertion des articles
  INSERT INTO blog_posts (slug, title, content, excerpt, image_url, published, author_id)
  VALUES
    (
      'importance-business-intelligence',
      'L''importance de la Business Intelligence dans la prise de décision',
      E'La Business Intelligence (BI) est devenue un élément crucial dans la prise de décision moderne...\n\n
      ## Pourquoi la BI est-elle importante ?\n\n
      La BI permet aux entreprises de :\n
      - Analyser les données historiques\n
      - Identifier les tendances\n
      - Prendre des décisions basées sur les données\n\n
      ## Comment implémenter la BI ?\n\n
      1. Définir les objectifs\n
      2. Collecter les données\n
      3. Choisir les outils appropriés\n
      4. Former les équipes\n\n
      ## Conclusion\n\n
      La BI est un investissement essentiel pour toute entreprise moderne.',
      'Découvrez comment la BI peut transformer votre processus de prise de décision et améliorer la performance de votre entreprise.',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      true,
      author_id
    ),
    (
      'data-lakes-vs-data-warehouse',
      'Data Lakes vs Data Warehouse : Quel choix pour votre entreprise ?',
      E'Comprendre les différences entre Data Lakes et Data Warehouse est essentiel...\n\n
      ## Data Warehouse\n\n
      Avantages :\n
      - Données structurées\n
      - Performances optimisées\n
      - Sécurité renforcée\n\n
      ## Data Lakes\n\n
      Avantages :\n
      - Flexibilité maximale\n
      - Stockage économique\n
      - Support de tous types de données\n\n
      ## Critères de choix\n\n
      1. Volume de données\n
      2. Types de données\n
      3. Cas d''usage\n
      4. Budget',
      'Une analyse comparative approfondie pour vous aider à choisir la meilleure solution de stockage de données pour vos besoins.',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      true,
      author_id
    ),
    (
      'intelligence-artificielle-entreprise',
      'L''IA au service de la performance entreprise',
      E'L''intelligence artificielle révolutionne les processus métier...\n\n
      ## Applications concrètes\n\n
      - Automatisation des tâches\n
      - Prédiction des tendances\n
      - Optimisation des processus\n\n
      ## Mise en œuvre\n\n
      1. Identification des cas d''usage\n
      2. Collecte des données\n
      3. Développement des modèles\n
      4. Déploiement et suivi',
      'Comment l''intelligence artificielle révolutionne les processus métier et crée de la valeur ajoutée.',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      true,
      author_id
    );
END $$;