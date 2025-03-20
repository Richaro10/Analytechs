/*
  # Insertion des données initiales

  1. Services
    - Business Intelligence
    - Data Analytics
    - Développement d'Applications
    - Conseil en Management
    - Contrôle de Gestion
    - Webmarketing

  2. Projets
    - Média-Participations
    - Groupe Acorus
    - Ouest-France
    - ASI
    - EVOLUTION
    - GROUPAMA
    - COVEA Finance

  3. Témoignages
    - Exemples de témoignages clients
*/

-- Insert services
INSERT INTO services (title, description, icon, features, benefits, "order") VALUES
(
  'Business Intelligence',
  'Transformez vos données en insights actionnables avec nos solutions BI sur mesure.',
  'BarChart2',
  '["Tableaux de bord interactifs", "Reporting automatisé", "KPIs personnalisés", "Intégration multi-sources"]',
  '["Prise de décision éclairée", "Optimisation des processus", "Gain de temps significatif", "ROI mesurable"]',
  1
),
(
  'Data Analytics',
  'Exploitez la puissance de vos données avec des analyses avancées.',
  'Database',
  '["Analyse prédictive", "Machine Learning", "Big Data", "Data Mining"]',
  '["Prédictions précises", "Automatisation intelligente", "Insights avancés", "Avantage concurrentiel"]',
  2
),
(
  'Développement d''Applications',
  'Des solutions logicielles sur mesure pour répondre à vos besoins spécifiques.',
  'Code2',
  '["Applications web", "Applications mobiles", "APIs", "Intégrations"]',
  '["Solutions personnalisées", "Performance optimale", "Scalabilité garantie", "Maintenance simplifiée"]',
  3
);

-- Insert projects
INSERT INTO projects (company, url, project, role, achievements, "order") VALUES
(
  'Média-Participations',
  'https://www.media-participations.com/',
  'Migration de données/Refonte SI de Gestion de droit d''auteur',
  'Analyste/Concepteur/Développeur Talend - SQL',
  '["Modélisation de données", "Développement de flux de données", "Assistance utilisateur et correction de données"]',
  1
),
(
  'Groupe Acorus',
  'https://www.groupe-acorus.fr/',
  'Mise en place d''un socle BI et aide au reporting/analyses',
  'Ingénieur BI',
  '["Architecture BI et traitements Talend", "Applications Toucan Toco pour suivi d''activité", "Tableaux de bord sous Tableau Software"]',
  2
);

-- Insert testimonials
INSERT INTO testimonials (name, role, company, content, "order") VALUES
(
  'Marie Dupont',
  'Directrice SI',
  'Média-Participations',
  'Analytechs nous a accompagnés dans la refonte complète de notre système de gestion des droits d''auteur. Leur expertise technique et leur compréhension des enjeux métier ont été déterminantes dans le succès du projet.',
  1
),
(
  'Thomas Martin',
  'DSI',
  'Groupe Acorus',
  'La mise en place de notre solution BI par Analytechs nous a permis de gagner en efficacité et en pertinence dans notre prise de décision. Une équipe professionnelle et à l''écoute.',
  2
);