import { Metadata } from 'next';
import ArticleGrid from '@/components/blog/ArticleGrid';
import CategoryFilter from '@/components/blog/CategoryFilter';
import SearchBar from '@/components/blog/SearchBar';
import SEO from '@/components/common/SEO';

export const metadata: Metadata = {
  title: 'All Articles',
  description: 'Browse all articles on technology, business, lifestyle, and insights.',
};

// Mock data - replace with real data from your CMS/API
const articles = [
  {
    id: '1',
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
    slug: 'future-of-web-development',
    category: 'Technology',
    author: { name: 'John Doe', avatar: '/avatars/john-doe.jpg' },
    publishedAt: '2024-01-15',
    readTime: 8,
    featuredImage: '/images/web-development-future.jpg',
    tags: ['Web Development', 'AI', 'Future Tech']
  },
  // Add more mock articles...
];

const categories = [
  { id: 'technology', name: 'Technology', count: 24 },
  { id: 'business', name: 'Business', count: 18 },
  { id: 'lifestyle', name: 'Lifestyle', count: 12 },
  { id: 'insights', name: 'Insights', count: 15 },
];

export default function ArticlesPage() {
  return (
    <>
      <SEO 
        title="All Articles"
        description="Browse all articles on technology, business, lifestyle, and insights."
        url="https://hynsights.com/articles"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Articles</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover insights on technology, business, and life that matter to curious minds.
          </p>
        </div>

        <div className="space-y-8">
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <SearchBar 
                value=""
                onChange={() => {}}
                placeholder="Search articles..."
              />
            </div>
          </div>

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            onCategoryChange={() => {}}
          />

          {/* Articles Grid */}
          <ArticleGrid 
            articles={articles}
            columns={3}
          />
        </div>
      </div>
    </>
  );
}