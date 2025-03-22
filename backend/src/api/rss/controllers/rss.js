'use strict';

const { sanitizeEntity } = require('@strapi/utils');

module.exports = {
  async index(ctx) {
    const articles = await strapi.entityService.findMany('api::article.article', {
      populate: ['image'],
      sort: { publishedAt: 'desc' },
      limit: 20
    });

    console.log("-------------------------------------")
    console.log(articles)

    const baseUrl = 'http://localhost:1337';

    const rssItems = articles.map((article) => {
      return `
        <item>
          <title>${article.title}</title>
          <link>${baseUrl}/blog/${article.slug}</link>
          <description><![CDATA[${article.excerpt}]]></description>
          <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
          <guid>${baseUrl}/blog/${article.slug}</guid>
        </item>
      `;
    }).join('\n');

    const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Analytechs Burkina Faso - Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Derniers articles sur la data, la BI et le conseil</description>
    <language>fr</language>
    ${rssItems}
  </channel>
</rss>`;

    ctx.set('Content-Type', 'application/xml');
    ctx.body = rssFeed;
  }
};
