📘 SEO-GUIDE.md – Stratégie de Référencement Analytechs

Ce document vous guide étape par étape pour assurer une intégration SEO optimale sur toutes les pages du site Analytechs Burkina Faso.

✅ 1. Meta par défaut (src/lib/seo.ts)

title, description, keywords, url, locale, siteName, type, image

Ces valeurs sont fusionnées avec celles spécifiques aux pages via generateMeta()

✅ 2. Composant SEO réutilisable (Seo.tsx)

Utilise Helmet de react-helmet-async

Accepte en plus canonical et links (pour rel=prev / rel=next)

✅ 3. Sitemap.xml (Strapi Backend)

Route custom dans /src/api/sitemap/controllers/sitemap.js

Génère dynamiquement toutes les pages : articles, pagination, filtres

Exposé sur /api/sitemap.xml

Appelé dans robots.txt

✅ 4. Pagination SEO-Friendly (Blog)

Pagination.tsx gère les liens

SEO : rel="prev" et rel="next" injectés dans <Seo />

Chaque page paginée a son propre URL : /blog?page=n

Inclure dans sitemap

✅ 5. Barre de recherche & filtres par tag (Blog)

Gestion via useSearchParams

URL lisibles : /blog?q=data&tag=BI

Ajout automatique au sitemap

✅ 6. Checklist création d'une nouvelle page

Créer la page avec contenu structuré

Ajouter <Seo /> avec :

title unique

description unique

canonical (optionnel si pas de paramètres)

links (si pagination)

Mettre à jour sitemap si nécessaire

✅ 7. Bonus : SEO avancé à venir (Roadmap)

Schema.org (type JSON-LD)

Google News / Blog RSS

Données structurées articles

Redirections propres via Strapi ou .htaccess

