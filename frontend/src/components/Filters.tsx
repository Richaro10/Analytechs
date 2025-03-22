import React from 'react';

interface FiltersProps {
  availableTags: { id: number; attributes: { name: string } }[];
  tagFilter: string;
  onTagClick: (tag: string) => void;
}

const Filters = ({ availableTags, tagFilter, onTagClick }: FiltersProps) => {
  if (!availableTags || availableTags.length === 0) return null;

  return (
    <div className="mb-10 flex flex-wrap justify-center gap-2">
      {availableTags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => onTagClick(tag.attributes.name)}
          className={`px-4 py-2 text-sm rounded-full border ${
            tag.attributes.name === tagFilter
              ? 'bg-accent text-white border-accent'
              : 'bg-gray-100 text-gray-700 border-gray-300'
          } hover:bg-accent hover:text-white transition`}
        >
          {tag.attributes.name}
        </button>
      ))}
    </div>
  );
};

export default Filters;
