import React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../hooks/useContent';
import type { BlogPost } from '../types/content';
import PageBanner from '../components/PageBanner';

const Blog = () => {
  const { data: posts, loading } = useContent<BlogPost[]>('blog-posts');

  const defaultPosts = [
    {
      id: 1,
      slug: 'importance-business-intelligence',
      title: "L'importance de la Business Intelligence dans la prise de décision",
      excerpt: "Découvrez comment la BI peut transformer votre processus de prise de décision et améliorer la performance de votre entreprise.",
      author: "Marie Dubois",
      date: "15 Mars 2024",
      content: "",
      image: {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
      }
    },
    {
      id: 2,
      slug: 'data-lakes-vs-data-warehouse',
      title: "Data Lakes vs Data Warehouse : Quel choix pour votre entreprise ?",
      excerpt: "Une analyse comparative approfondie pour vous aider à choisir la meilleure solution de stockage de données pour vos besoins.",
      author: "Thomas Martin",
      date: "12 Mars 2024",
      content: "",
      image: {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
      }
    },
    {
      id: 3,
      slug: 'intelligence-artificielle-entreprise',
      title: "L'IA au service de la performance entreprise",
      excerpt: "Comment l'intelligence artificielle révolutionne les processus métier et crée de la valeur ajoutée.",
      author: "Sophie Bernard",
      date: "10 Mars 2024",
      content: "",
      image: {
        url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    },
    {
      id: 4,
      slug: 'big-data-tendances-2024',
      title: "Les grandes tendances du Big Data en 2024",
      excerpt: "Découvrez les technologies et pratiques qui façonnent l'avenir du Big Data cette année.",
      author: "Alexandre Petit",
      date: "8 Mars 2024",
      content: "",
      image: {
        url: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    },
    {
      id: 5,
      slug: 'data-governance-best-practices',
      title: "Meilleures pratiques en gouvernance des données",
      excerpt: "Guide complet pour mettre en place une gouvernance des données efficace et conforme aux réglementations.",
      author: "Julie Dupont",
      date: "5 Mars 2024",
      content: "",
      image: {
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
      }
    },
    {
      id: 6,
      slug: 'machine-learning-predictif',
      title: "Machine Learning : Prédire pour mieux décider",
      excerpt: "Comment le machine learning transforme l'analyse prédictive et améliore la prise de décision.",
      author: "Marc Dubois",
      date: "3 Mars 2024",
      content: "",
      image: {
        url: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
      }
    },
    {
      id: 7,
      slug: 'data-visualisation-storytelling',
      title: "L'art du Data Storytelling",
      excerpt: "Comment transformer vos données en histoires impactantes pour une meilleure communication.",
      author: "Emma Laurent",
      date: "1 Mars 2024",
      content: "",
      image: {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    },
    {
      id: 8,
      slug: 'real-time-analytics',
      title: "L'analyse en temps réel : Un avantage compétitif",
      excerpt: "Les bénéfices et les défis de l'implémentation de l'analyse en temps réel dans votre stratégie data.",
      author: "Paul Martin",
      date: "28 Février 2024",
      content: "",
      image: {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    },
    {
      id: 9,
      slug: 'importance-controle-gestion',
      title: "Le Contrôle de Gestion : Pilier de la Performance Entreprise",
      excerpt: "Découvrez pourquoi le contrôle de gestion est essentiel pour piloter efficacement votre entreprise et optimiser ses performances.",
      author: "Claire Martin",
      date: "25 Février 2024",
      content: "",
      image: {
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    },
    {
      id: 10,
      slug: 'data-controle-gestion',
      title: "La Data : Nouveau Levier du Contrôle de Gestion",
      excerpt: "Comment l'exploitation des données transforme et modernise la fonction contrôle de gestion.",
      author: "Sophie Dubois",
      date: "22 Février 2024",
      content: "",
      image: {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    }
  ];

  const displayPosts = posts || defaultPosts;

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <PageBanner
          title="Blog"
          subtitle="Découvrez nos derniers articles sur la data, la BI et la stratégie d'entreprise"
          backgroundImage="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                  <div className="flex items-center space-x-4">
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              </div>
            ))}
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
        backgroundImage="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group border border-gray-100"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image.url}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-neutral mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      5 min
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