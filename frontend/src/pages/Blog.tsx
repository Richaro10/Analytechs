import React, { useState } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import type { BlogPost } from '../types/content';
import PageBanner from '../components/PageBanner';
import { Seo } from '../components/Seo';
import { defaultMeta } from '../components/Seo';
import Pagination from '../components/Pagination';
import ArticleCard from '../components/ArticleCard';
import Filters from '../components/Filters';

const Blog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const query = searchParams.get('q') || '';
  const tagFilter = searchParams.get('tag') || '';

  const limit = 6;
  const start = (page - 1) * limit;

  const [searchInput, setSearchInput] = useState(query);

  const { data: tagsData } = useContent<{ data: { id: number; attributes: { name: string } }[] }>('tags');
  const availableTags = tagsData?.data || [];

  const filters: any = {};
  if (query) filters.title = { $containsi: query };
  if (tagFilter) filters.tags = { name: { $eq: tagFilter } };
  filters.publishedAt = { $notNull: true };

  const { data: response, meta, loading, error } = useContent<{ data: BlogPost[] }>('articles', undefined, {
    pagination: { start, limit },
    populate: '*',
    sort: ['publishedAt:desc'],
    filters
  });

  const posts: BlogPost[] = Array.isArray(response) ? response : response?.data || [];
  const totalPosts = meta?.pagination?.total || posts.length;
  const totalPages = Math.ceil(totalPosts / limit);

  const prevUrl = page > 1 ? `${defaultMeta.url}/blog?page=${page - 1}` : null;
  const nextUrl = page < totalPages ? `${defaultMeta.url}/blog?page=${page + 1}` : null;

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    newParams.set('q', searchInput);
    newParams.set('page', '1');
    navigate(`/blog?${newParams.toString()}`);
  };

  const handleTagClick = (tag: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('tag', tag);
    newParams.set('page', '1');
    navigate(`/blog?${newParams.toString()}`);
  };
  
  const seoLinks: { rel: string; href: string }[] = [prevUrl && { rel: 'prev', href: prevUrl }, nextUrl && { rel: 'next', href: nextUrl }].filter(Boolean) as { rel: string; href: string }[];


  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={`Blog - Page ${page} - ${defaultMeta.siteName}`}
        description="Explorez nos articles sur la data, la Business Intelligence et le conseil stratégique au Burkina Faso."
        url={`${defaultMeta.url}${location.pathname}?page=${page}${query ? `&q=${query}` : ''}${tagFilter ? `&tag=${tagFilter}` : ''}`}
        image={defaultMeta.image}
        links={seoLinks} 
      />

      <PageBanner
        title="Blog"
        subtitle="Découvrez nos derniers articles sur la data, la BI et la stratégie d'entreprise"
        backgroundImage="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSearch} className="mb-10 flex items-center max-w-md mx-auto">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Rechercher un article..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-l-xl focus:ring-2 focus:ring-accent focus:outline-none"
          />
          <button
            type="submit"
            className="bg-accent text-white px-5 py-3 rounded-r-xl hover:bg-primary flex items-center gap-2"
          >
            <Search className="h-5 w-5" /> Rechercher
          </button>
        </form>

        <Filters availableTags={availableTags} tagFilter={tagFilter} onTagClick={handleTagClick} />

        {loading && <p className="text-center text-gray-600">Chargement des articles...</p>}
        {error && <p className="text-center text-red-500">Erreur : {error.message}</p>}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => <ArticleCard key={post.id} post={post} />)
          ) : (
            <p className="text-center text-gray-600 col-span-full">Aucun article trouvé.</p>
          )}
        </div>

        <Pagination currentPage={page} totalPages={totalPages} basePath="/blog" />
      </div>
    </div>
  );
};

export default Blog;
