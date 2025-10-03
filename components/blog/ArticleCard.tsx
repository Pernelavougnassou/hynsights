import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';

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

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'horizontal' | 'minimal';
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  article, 
  variant = 'default',
  className 
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (variant === 'horizontal') {
    return (
      <article className={[
        'flex flex-col sm:flex-row bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow',
        className
      ].filter(Boolean).join(' ')}>
        {article.featuredImage && (
          <div className="sm:w-48 h-48 sm:h-32 relative flex-shrink-0">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
            />
          </div>
        )}
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="primary" size="sm">
              {article.category}
            </Badge>
            <span className="text-sm text-gray-500">
              {article.readTime} min read
            </span>
          </div>
          <Link href={`/blog/${article.slug}`}>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
              {article.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {article.author.avatar && (
                <div className="w-6 h-6 relative">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              )}
              <span className="text-sm text-gray-700">{article.author.name}</span>
            </div>
            <span className="text-sm text-gray-500">
              {formatDate(article.publishedAt)}
            </span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'minimal') {
    return (
      <article className={[
        'py-4 border-b border-gray-200 last:border-b-0',
        className
      ].filter(Boolean).join(' ')}>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" size="sm">
            {article.category}
          </Badge>
          <span className="text-sm text-gray-500">
            {formatDate(article.publishedAt)}
          </span>
        </div>
        <Link href={`/blog/${article.slug}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-2 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{article.author.name}</span>
          <span>{article.readTime} min read</span>
        </div>
      </article>
    );
  }

  return (
    <article className={[
      'bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden',
      className
    ].filter(Boolean).join(' ')}>
      {article.featuredImage && (
        <div className="aspect-video relative">
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="primary" size="sm">
            {article.category}
          </Badge>
          <span className="text-sm text-gray-500">
            {article.readTime} min read
          </span>
        </div>
        <Link href={`/blog/${article.slug}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {article.author.avatar && (
              <div className="w-8 h-8 relative">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            )}
            <div>
              <span className="text-sm font-medium text-gray-900">
                {article.author.name}
              </span>
            </div>
          </div>
          <span className="text-sm text-gray-500">
            {formatDate(article.publishedAt)}
          </span>
        </div>
      </div>
    </article>
  );
};

ArticleCard.displayName = 'ArticleCard';

export default ArticleCard;