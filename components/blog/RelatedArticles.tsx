import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';

interface RelatedArticle {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  publishedAt: string;
  readTime: number;
  featuredImage?: string;
  author: {
    name: string;
    avatar?: string;
  };
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  currentArticleId: string;
  title?: string;
  className?: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  articles,
  currentArticleId,
  title = "Related Articles",
  className
}) => {
  const filteredArticles = articles.filter(article => article.id !== currentArticleId);

  if (!filteredArticles || filteredArticles.length === 0) {
    return null;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section className={[
      'bg-white rounded-lg border border-gray-200 p-6',
      className
    ].filter(Boolean).join(' ')}>
      <h3 className="text-xl font-semibold text-gray-900 mb-6">{title}</h3>
      <div className="space-y-6">
        {filteredArticles.slice(0, 3).map((article) => (
          <article key={article.id} className="flex space-x-4">
            {article.featuredImage && (
              <div className="w-20 h-20 relative flex-shrink-0">
                <Image
                  src={article.featuredImage}
                  alt={article.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <Badge variant="outline" size="sm">
                  {article.category}
                </Badge>
                <span className="text-xs text-gray-500">
                  {article.readTime} min read
                </span>
              </div>
              <Link href={`/blog/${article.slug}`}>
                <h4 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                  {article.title}
                </h4>
              </Link>
              <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{article.author.name}</span>
                <span>{formatDate(article.publishedAt)}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      {filteredArticles.length > 3 && (
        <div className="mt-6 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            View more articles
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
};

RelatedArticles.displayName = 'RelatedArticles';

export default RelatedArticles;