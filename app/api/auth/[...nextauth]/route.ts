import { NextRequest, NextResponse } from 'next/server';

// GET /api/articles - Get all articles with optional filtering
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    // Mock data - replace with database queries
    const mockArticles = [
      {
        id: '1',
        title: 'The Future of Web Development',
        excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
        slug: 'future-of-web-development',
        category: 'Technology',
        author: {
          id: 'author-1',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: '/avatars/john-doe.jpg'
        },
        publishedAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z',
        readTime: 8,
        views: 1250,
        featuredImage: '/images/web-development-future.jpg',
        tags: ['Web Development', 'AI', 'Future Tech'],
        status: 'published'
      }
    ];

    // Apply filters (in a real app, this would be done in the database query)
    let filteredArticles = mockArticles;
    
    if (category) {
      filteredArticles = filteredArticles.filter(article => 
        article.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (search) {
      filteredArticles = filteredArticles.filter(article =>
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply pagination
    const paginatedArticles = filteredArticles.slice(offset, offset + limit);
    
    return NextResponse.json({
      articles: paginatedArticles,
      total: filteredArticles.length,
      hasMore: offset + limit < filteredArticles.length
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

// POST /api/articles - Create a new article
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { title, content, excerpt, category, status = 'draft' } = body;
    
    if (!title || !content || !excerpt || !category) {
      return NextResponse.json(
        { error: 'Missing required fields: title, content, excerpt, category' },
        { status: 400 }
      );
    }

    // In a real app, you would:
    // 1. Validate user authentication/authorization
    // 2. Sanitize and validate input data
    // 3. Generate slug from title
    // 4. Save to database
    // 5. Handle file uploads for featured images

    const mockArticle = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      content,
      excerpt,
      slug: title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
      category,
      status,
      author: {
        id: 'current-user-id',
        name: 'Current User',
        email: 'user@example.com'
      },
      publishedAt: status === 'published' ? new Date().toISOString() : null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      views: 0,
      tags: body.tags || []
    };

    return NextResponse.json(mockArticle, { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      { error: 'Failed to create article' },
      { status: 500 }
    );
  }
}