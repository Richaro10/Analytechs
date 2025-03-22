// 📁 src/components/Pagination.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string; // ex: "/blog"
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, basePath }) => {
  if (totalPages <= 1) return null;

  const prevPage = currentPage > 1 ? `${basePath}?page=${currentPage - 1}` : null;
  const nextPage = currentPage < totalPages ? `${basePath}?page=${currentPage + 1}` : null;

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center mt-10 space-x-2">
      {/* Bouton précédent */}
      {prevPage && (
        <Link
          to={prevPage}
          className="px-4 py-2 rounded-lg border text-sm bg-white text-gray-700 hover:bg-accent hover:text-white transition"
        >
          Précédent
        </Link>
      )}

      {/* Numéros de page */}
      {getPageNumbers().map((page) => (
        <Link
          key={page}
          to={`${basePath}?page=${page}`}
          className={`px-4 py-2 rounded-lg border text-sm ${
            page === currentPage
              ? 'bg-primary text-white border-primary'
              : 'bg-white text-gray-700 hover:bg-accent hover:text-white'
          } transition`}
        >
          {page}
        </Link>
      ))}

      {/* Bouton suivant */}
      {nextPage && (
        <Link
          to={nextPage}
          className="px-4 py-2 rounded-lg border text-sm bg-white text-gray-700 hover:bg-accent hover:text-white transition"
        >
          Suivant
        </Link>
      )}
    </div>
  );
};

export default Pagination;
