// 📁 src/components/ArticleCard.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../types/content';

const fallbackImage = 'https://images.unsplash.com/photo-1581090700227-1e8e934de7b8?auto=format&fit=crop&w=1200&q=80';

const ArticleCard = ({ post }: { post: BlogPost }) => {
  const { slug, title, excerpt, publishedAt, author, image } = post.attributes;
  const imageUrl = image?.data?.attributes?.url || fallbackImage;
  const displayAuthor = author || 'Auteur inconnu';
  const displayExcerpt = excerpt || 'Contenu non disponible';

  console.log(post)
  
  return (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group border border-gray-100">
      <Link to={`/blog/${slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-neutral mb-3 group-hover:text-accent transition-colors line-clamp-2">
            {title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{displayExcerpt}</p>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" /> {displayAuthor}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" /> {new Date(publishedAt).toLocaleDateString('fr-FR')}
            </div>
          </div>
          <div className="mt-4 flex items-center text-accent group-hover:text-primary transition-colors">
            Lire l'article
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
