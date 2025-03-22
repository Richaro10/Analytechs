
# 📘 SEO-GUIDE.md – Stratégie de Référencement Analytechs

Ce document vous guide étape par étape pour assurer une **intégration SEO optimale** sur toutes les pages du site Analytechs Burkina Faso.

---

## ✅ 1. Meta par défaut (`src/lib/seo.ts`)

- `title`, `description`, `keywords`, `url`, `locale`, `siteName`, `type`, `image`
- Ces valeurs sont fusionnées avec celles spécifiques aux pages via `generateMeta()`

```ts
export const defaultMeta = {
  title: "Analytechs Burkina Faso - Data & Dev & Management",
  description: "Solutions innovantes de Business Intelligence, Data Analytics et Conseil en Management à Ouagadougou.",
  keywords: "business intelligence burkina faso, data analytics ouagadougou, conseil management afrique ouest, analytechs burkina, data science burkina faso",
  url: "https://analytechs.tech",
  locale: "fr_BF",
  siteName: "Analytechs Burkina Faso",
  type: "website",
  image: "https://analytechs.tech/og-image.jpg"
};
```

## ✅ 2. Composant SEO réutilisable (`Seo.tsx`)

- Utilise `Helmet` de `react-helmet-async`
- Accepte en plus `canonical`, `type` et `links` (`rel=prev` / `rel=next`)

```tsx
<Seo
  title="Page personnalisée"
  description="Description personnalisée"
  canonical="https://analytechs.tech/page"
  type="article"
  links={[{ rel: 'prev', href: '...' }, { rel: 'next', href: '...' }]}
/>
```

## ✅ 3. Sitemap.xml (Strapi Backend)

- Route custom dans `/src/api/sitemap/controllers/sitemap.js`
- Génère dynamiquement toutes les pages : articles, pagination, filtres
- Exposé sur `/api/sitemap.xml`
- Appelé dans `robots.txt`

```txt
Sitemap: https://analytechs.tech/api/sitemap.xml
```

## ✅ 4. Pagination SEO-Friendly (Blog)

- `Pagination.tsx` gère les liens
- SEO : rel="prev" et rel="next" injectés dans `<Seo />`
- Chaque page paginée a son propre URL : `/blog?page=n`
- Inclure dans sitemap

## ✅ 5. Barre de recherche & filtres par tag (Blog)

- Gestion via `useSearchParams`
- URL lisibles : `/blog?q=data&tag=BI`
- Ajout automatique au sitemap

## ✅ 6. Flux RSS (Google News / lecteurs)

- Route RSS générée dans `/src/api/rss/controllers/rss.js`
- Format XML conforme aux standards Google News / Feedly
- Lien ajouté dans `<head>` du `index.html`

```html
<link rel="alternate" type="application/rss+xml" title="Analytechs Blog RSS Feed" href="https://analytechs.tech/api/rss.xml" />
```

## ✅ 7. Schema.org / JSON-LD pour les articles

- Intégré dans `<Helmet>` du composant `BlogPost.tsx`
- Génère des données structurées riches pour les résultats enrichis Google

```tsx
<script type="application/ld+json">
  {JSON.stringify(articleSchema)}
</script>
```

- Structure :
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Titre article",
  "description": "Résumé",
  "author": { "@type": "Person", "name": "Auteur" },
  "publisher": { "@type": "Organization", "name": "Analytechs Burkina Faso" }
}
```

## ✅ 8. Checklist création d'une nouvelle page

1. Créer la page avec contenu structuré
2. Ajouter `<Seo />` avec :
   - `title` unique
   - `description` unique
   - `canonical` (optionnel)
   - `type` (`article`, `website`, etc.)
   - `links` (si pagination)
3. Vérifier dans sitemap
4. Ajouter balises `<script type="application/ld+json">` si article

## ✅ 9. Amélioration SEO technique (Roadmap)

- ⚡ Lazy loading des images (via `loading="lazy"` dans `<img />`)
- ⚡ Minification HTML/CSS/JS dans `vite.config.ts`
- ⚡ GZIP compression + cache headers dans `nginx.conf`
- ⚡ ARIA labels + structure logique des headings (`h1`, `h2`, etc.)
- ⚡ Redirections HTTP vers HTTPS avec NGINX

## ✅ 10. Configuration Vite optimisée (`vite.config.ts`)

```ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    host: true,
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react']
        }
      }
    }
  }
});
```

## ✅ 11. Configuration NGINX recommandée (production)

[cf. bloc nginx complet ci-dessus – déjà inclus]

---

📌 **Dernière mise à jour :** Mars 2025  
🛠 **Mainteneur SEO :** Richaro / Analytechs Tech Team
