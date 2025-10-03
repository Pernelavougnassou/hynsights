import React from 'react';
import ArticleCard from './ArticleCard';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: number;
  featuredImage?: string;
  tags?: string[];
}

interface ArticleGridProps {
  articles: Article[];
  variant?: 'default' | 'horizontal' | 'minimal';
  columns?: 1 | 2 | 3 | 4;
  className?: string;
  loading?: boolean;
}

const ArticleGrid: React.FC<ArticleGridProps> = ({
  articles,
  variant = 'default',
  columns = 3,
  className,
  loading = false
}) => {
  const getGridClasses = () => {
    switch (columns) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  if (loading) {
    return (
      <div className={[
        'grid gap-6',
        getGridClasses(),
        className
      ].filter(Boolean).join(' ')}>
        {Array.from({ length: columns * 2 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden animate-pulse"
          >
            <div className="aspect-video bg-gray-200" />
            <div className="p-6">
              <div className="h-4 bg-gray-200 rounded w-20 mb-3" />
              <div className="h-6 bg-gray-200 rounded mb-3" />
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full" />
                  <div className="h-4 bg-gray-200 rounded w-24" />
                </div>
                <div className="h-4 bg-gray-200 rounded w-20" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
        <p className="text-gray-500">There are no articles to display at the moment.</p>
      </div>
    );
  }

  return (
    <div className={[
      'grid gap-6',
      variant === 'horizontal' ? 'grid-cols-1' : getGridClasses(),
      className
    ].filter(Boolean).join(' ')}>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          variant={variant}
        />
      ))}
    </div>
  );
};

ArticleGrid.displayName = 'ArticleGrid';

export default ArticleGrid;