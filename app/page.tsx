import Hero from '@/components/home/Hero';
import FeaturedArticles from '@/components/home/FeaturedArticles';
import StatsSection from '@/components/home/StatsSection';
import Newsletter from '@/components/home/Newsletter';
import SEO from '@/components/common/SEO';

// Mock data - replace with real data from your CMS/API
const featuredArticles = [
  {
    id: '1',
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web development, from AI integration to modern frameworks.',
    slug: 'future-of-web-development',
    category: 'Technology',
    author: {
      name: 'John Doe',
      avatar: '/avatars/john-doe.jpg'
    },
    publishedAt: '2024-01-15',
    readTime: 8,
    featuredImage: '/images/web-development-future.jpg',
    tags: ['Web Development', 'AI', 'Future Tech']
  },
  {
    id: '2',
    title: 'Building Sustainable Businesses',
    excerpt: 'How modern entrepreneurs are creating companies that balance profit with environmental and social responsibility.',
    slug: 'building-sustainable-businesses',
    category: 'Business',
    author: {
      name: 'Jane Smith',
      avatar: '/avatars/jane-smith.jpg'
    },
    publishedAt: '2024-01-10',
    readTime: 6,
    featuredImage: '/images/sustainable-business.jpg',
    tags: ['Sustainability', 'Business', 'Environment']
  },
  {
    id: '3',
    title: 'The Art of Remote Work',
    excerpt: 'Practical strategies for maintaining productivity and work-life balance in a distributed work environment.',
    slug: 'art-of-remote-work',
    category: 'Lifestyle',
    author: {
      name: 'Alex Johnson',
      avatar: '/avatars/alex-johnson.jpg'
    },
    publishedAt: '2024-01-05',
    readTime: 5,
    featuredImage: '/images/remote-work.jpg',
    tags: ['Remote Work', 'Productivity', 'Lifestyle']
  }
];

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <FeaturedArticles articles={featuredArticles} />
      <StatsSection />
      <Newsletter />
    </>
  );
}
