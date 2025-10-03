import React from 'react';
import Badge from '@/components/ui/Badge';

interface Category {
  id: string;
  name: string;
  count: number;
  color?: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory?: string;
  onCategoryChange: (categoryId: string | null) => void;
  className?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  className
}) => {
  const allCount = categories.reduce((sum, category) => sum + category.count, 0);

  return (
    <div className={[
      'flex flex-wrap gap-3',
      className
    ].filter(Boolean).join(' ')}>
      <button
        onClick={() => onCategoryChange(null)}
        className={[
          'inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors',
          !selectedCategory
            ? 'bg-blue-100 text-blue-800 border border-blue-200'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
        ].filter(Boolean).join(' ')}
      >
        All
        <span className={[
          'ml-2 px-2 py-0.5 rounded-full text-xs',
          !selectedCategory
            ? 'bg-blue-200 text-blue-800'
            : 'bg-gray-200 text-gray-600'
        ].filter(Boolean).join(' ')}>
          {allCount}
        </span>
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={[
            'inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors',
            selectedCategory === category.id
              ? 'bg-blue-100 text-blue-800 border border-blue-200'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
          ].filter(Boolean).join(' ')}
        >
          {category.name}
          <span className={[
            'ml-2 px-2 py-0.5 rounded-full text-xs',
            selectedCategory === category.id
              ? 'bg-blue-200 text-blue-800'
              : 'bg-gray-200 text-gray-600'
          ].filter(Boolean).join(' ')}>
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
};

CategoryFilter.displayName = 'CategoryFilter';

export default CategoryFilter;