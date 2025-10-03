import React from 'react';
import Link from 'next/link';
import ArticleCard from '@/components/blog/ArticleCard';
import Button from '@/components/ui/Button';

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

interface FeaturedArticlesProps {
  articles: Article[];
  title?: string;
  className?: string;
}

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({
  articles,
  title = "Featured Articles",
  className
}) => {
  if (!articles || articles.length === 0) {
    return null;
  }

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1, 4);

  return (
    <section className={[
      'py-16 sm:py-24',
      className
    ].filter(Boolean).join(' ')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and recent insights on technology, business, and life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Main Featured Article */}
          <div className="lg:col-span-1">
            <ArticleCard
              article={featuredArticle}
              className="h-full"
            />
          </div>

          {/* Other Featured Articles */}
          <div className="lg:col-span-1 space-y-6">
            {otherArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                variant="horizontal"
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button variant="outline" size="lg">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

FeaturedArticles.displayName = 'FeaturedArticles';

export default FeaturedArticles;