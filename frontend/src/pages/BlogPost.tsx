// 📁 src/pages/BlogPost.tsx

import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useContent } from '../hooks/useContent';
import type { BlogPost as BlogPostType } from '../types/content';
import PageBanner from '../components/PageBanner';
import { Calendar, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { defaultMeta } from '../components/Seo';
import ShareButtons from '../components/ShareButtons';

const BlogPost = () => {
  const { slug } = useParams();
  const location = useLocation();

  const { data: response, loading, error } = useContent<{ data: BlogPostType[] }>('articles', undefined, {
    filters: { slug: { $eq: slug } },
    populate: '*',
  });

  const post = Array.isArray(response) ? response[0] : response?.data?.[0];

  if (loading) {
    return <div className="min-h-screen bg-white text-center py-12">Chargement...</div>;
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white text-center py-12">
        <h2 className="text-xl font-semibold text-red-500">Erreur : Impossible de charger l'article</h2>
      </div>
    );
  }

  const { title, excerpt, author, publishedAt, image, content } = post.attributes;
  const articleUrl = `${defaultMeta.url}/blog/${slug}`;
  const imageUrl = image?.data?.attributes?.url || defaultMeta.image;

  // ✅ JSON-LD Schema.org pour l'article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt || defaultMeta.description,
    author: {
      "@type": "Person",
      name: author || 'Auteur inconnu',
    },
    datePublished: new Date(publishedAt).toISOString(),
    image: [imageUrl],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    publisher: {
      "@type": "Organization",
      name: defaultMeta.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${defaultMeta.url}/favicon.svg`,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ SEO + JSON-LD */}
      <Helmet>
        <title>{title} - {defaultMeta.siteName}</title>
        <meta name="description" content={excerpt || defaultMeta.description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt || defaultMeta.description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={articleUrl} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <PageBanner
        title={title}
        subtitle={excerpt || 'Aperçu de notre article'}
        badge={author || 'Auteur inconnu'}
        backgroundImage={imageUrl}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-gray-600 text-sm mb-4 flex items-center gap-4">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" /> {author || 'Auteur inconnu'}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" /> {publishedAt ? new Date(publishedAt).toLocaleDateString('fr-FR') : 'Date inconnue'}
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {content ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            <p className="text-gray-500 italic">Contenu non disponible.</p>
          )}
        </div>

        {/* ✅ Boutons de partage social */}
        <div className="mt-12">
          <ShareButtons url={articleUrl} title={title} />
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
