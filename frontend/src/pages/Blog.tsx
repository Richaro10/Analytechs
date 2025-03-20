import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../hooks/useContent';
import type { BlogPost } from '../types/content';
import PageBanner from '../components/PageBanner';

const Blog = () => {
  const { data: response, loading, error } = useContent<{ data: BlogPost[] }>('articles');

  console.log("🔥 API response:", response);

  const defaultPosts: BlogPost[] = [
    {
      id: 1,
      attributes: {
        slug: 'importance-business-intelligence',
        title: "L'importance de la Business Intelligence dans la prise de décision",
        excerpt: "Découvrez comment la BI peut transformer votre processus de prise de décision et améliorer la performance de votre entreprise.",
        author: "Marie Dubois",
        publishedAt: "2024-03-15T00:00:00.000Z",
        createdAt: "2024-03-15T00:00:00.000Z",
        updatedAt: "2024-03-15T00:00:00.000Z",
        content: "",
        image: {
          data: {
            attributes: {
              url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
            }
          }
        }
      }
    }
  ];

  // ✅ Typage explicite = TS est content
  const posts: BlogPost[] = Array.isArray(response) ? response : response?.data || defaultPosts;

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <PageBanner
          title="Blog"
          subtitle="Découvrez nos derniers articles sur la data, la BI et la stratégie d'entreprise"
          backgroundImage="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <PageBanner
          title="Blog"
          subtitle="Une erreur est survenue lors du chargement des articles"
          backgroundImage="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-600">
            <p>Erreur de chargement des articles. Veuillez réessayer plus tard.</p>
            <p className="mt-2 text-sm text-gray-500">{error.message}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <PageBanner
        title="Blog"
        subtitle="Découvrez nos derniers articles sur la data, la BI et la stratégie d'entreprise"
        backgroundImage="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: BlogPost) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group border border-gray-100"
            >
              <Link to={`/blog/${post.attributes.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.attributes.image?.data?.attributes?.url}
                    alt={post.attributes.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-neutral mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.attributes.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.attributes.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.attributes.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.attributes.publishedAt).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-accent group-hover:text-primary transition-colors">
                    Lire l'article
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
