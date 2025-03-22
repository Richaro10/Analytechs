"use strict";

const removeAccents = require("remove-accents");

module.exports = {
  async sitemap(ctx) {
    const baseUrl = "http://localhost:1337";

    // 🔸 1. Récupère tous les articles avec leur date de mise à jour
    const articles = await strapi.entityService.findMany("api::article.article", {
      fields: ["slug", "updatedAt"],
      populate: { tags: true },
      sort: { publishedAt: "desc" },
      limit: 1000,
    });

    // 🔸 2. Génère les URLs paginées
    const blogUrls = [];
    const articlesPerPage = 6;
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    for (let i = 1; i <= totalPages; i++) {
      blogUrls.push(`<url><loc>${baseUrl}/blog?page=${i}</loc></url>`);
    }

    // 🔸 3. Génère les URLs par tag (avec pagination)
    const allTags = new Set();
    articles.forEach((article) => {
      article.tags.forEach((tag) => {
        allTags.add(tag.name);
      });
    });

    const tagUrls = [];
    allTags.forEach((tag) => {
      const tagSlug = encodeURIComponent(removeAccents(tag.toLowerCase()));
      tagUrls.push(`<url><loc>${baseUrl}/blog?tag=${tagSlug}</loc></url>`);
      for (let i = 1; i <= totalPages; i++) {
        tagUrls.push(`<url><loc>${baseUrl}/blog?tag=${tagSlug}&page=${i}</loc></url>`);
      }
    });

    // 🔸 4. URLs d’articles avec <lastmod>
    const articleUrls = articles.map(
      (post) => {
        const date = new Date(post.updatedAt).toISOString();
        return `<url><loc>${baseUrl}/blog/${post.slug}</loc><lastmod>${date}</lastmod></url>`;
      }
    );

    // 🔸 5. Assemble le sitemap complet
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${blogUrls.join("\n")}
  ${tagUrls.join("\n")}
  ${articleUrls.join("\n")}
</urlset>`;

    ctx.set("Content-Type", "application/xml");
    ctx.body = sitemapXml;
  },
};
