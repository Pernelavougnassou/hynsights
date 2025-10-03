import React from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';

interface Article {
  id?: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
}

interface ArticleEditorProps {
  article?: Article;
  onSave: (article: Article) => void;
  onCancel?: () => void;
  loading?: boolean;
  className?: string;
}

const ArticleEditor: React.FC<ArticleEditorProps> = ({
  article,
  onSave,
  onCancel,
  loading = false,
  className
}) => {
  const [formData, setFormData] = React.useState<Article>(
    article || {
      title: '',
      content: '',
      excerpt: '',
      category: '',
      tags: [],
      status: 'draft'
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const updateField = (field: keyof Article, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className={[
      'max-w-4xl mx-auto',
      className
    ].filter(Boolean).join(' ')}>
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">
            {article?.id ? 'Edit Article' : 'Create New Article'}
          </h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Title"
              value={formData.title}
              onChange={(e) => updateField('title', e.target.value)}
              required
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => updateField('content', e.target.value)}
                rows={12}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <Input
              label="Excerpt"
              value={formData.excerpt}
              onChange={(e) => updateField('excerpt', e.target.value)}
              helperText="Brief description of the article"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Category"
                value={formData.category}
                onChange={(e) => updateField('category', e.target.value)}
                required
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => updateField('status', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              {onCancel && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={onCancel}
                  disabled={loading}
                >
                  Cancel
                </Button>
              )}
              <Button
                type="submit"
                loading={loading}
              >
                {article?.id ? 'Update Article' : 'Create Article'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

ArticleEditor.displayName = 'ArticleEditor';

export default ArticleEditor;