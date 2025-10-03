import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import TableOfContents from '@/components/blog/TableOfContents';
import RelatedArticles from '@/components/blog/RelatedArticles';
import ShareButtons from '@/components/common/ShareButtons';
import SEO from '@/components/common/SEO';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // In a real app, fetch the article data based on params.slug
  const title = 'Article Title';
  const description = 'Article description';
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
    },
  };
}

export default function ArticlePage({ params }: Props) {
  // Mock data - in a real app, fetch based on params.slug
  const article = {
    id: '1',
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
    content: `<h2>Introduction</h2><p>Web development is constantly evolving...</p>`,
    slug: params.slug,
    category: 'Technology',
    author: { name: 'John Doe', avatar: '/avatars/john-doe.jpg' },
    publishedAt: '2024-01-15',
    readTime: 8,
    featuredImage: '/images/web-development-future.jpg',
    tags: ['Web Development', 'AI', 'Future Tech']
  };

  const headings = [
    { id: 'introduction', text: 'Introduction', level: 2 },
    { id: 'current-trends', text: 'Current Trends', level: 2 },
    { id: 'future-outlook', text: 'Future Outlook', level: 2 },
  ];

  const relatedArticles = [
    {
      id: '2',
      title: 'Building Sustainable Businesses',
      excerpt: 'How modern entrepreneurs are creating companies that balance profit with responsibility.',
      slug: 'building-sustainable-businesses',
      category: 'Business',
      author: { name: 'Jane Smith', avatar: '/avatars/jane-smith.jpg' },
      publishedAt: '2024-01-10',
      readTime: 6,
      featuredImage: '/images/sustainable-business.jpg',
    }
  ];

  return (
    <>
      <SEO 
        title={article.title}
        description={article.excerpt}
        url={`https://hynsights.com/articles/${article.slug}`}
        type="article"
        publishedTime={article.publishedAt}
        image={article.featuredImage}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="primary">{article.category}</Badge>
            <span className="text-gray-500">•</span>
            <span className="text-sm text-gray-500">{article.readTime} min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              {article.author.avatar && (
                <div className="w-12 h-12 relative">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-medium text-gray-900">{article.author.name}</p>
                <p className="text-sm text-gray-500">
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
            
            <ShareButtons 
              url={`https://hynsights.com/articles/${article.slug}`}
              title={article.title}
              description={article.excerpt}
            />
          </div>
        </header>

        {/* Featured Image */}
        {article.featuredImage && (
          <div className="aspect-video relative mb-8">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80">
            <div className="sticky top-24 space-y-8">
              <TableOfContents headings={headings} />
              <RelatedArticles 
                articles={relatedArticles}
                currentArticleId={article.id}
              />
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}