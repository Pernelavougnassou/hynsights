import React from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface NewsletterProps {
  title?: string;
  description?: string;
  className?: string;
  onSubmit?: (email: string) => void;
}

const Newsletter: React.FC<NewsletterProps> = ({
  title = "Stay Updated",
  description = "Get the latest insights delivered directly to your inbox. No spam, just valuable content.",
  className,
  onSubmit
}) => {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage('Please enter your email address');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      if (onSubmit) {
        await onSubmit(email);
      }
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={[
      'py-16 sm:py-24 bg-blue-600',
      className
    ].filter(Boolean).join(' ')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-blue-100 mb-8">{description}</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-white"
                disabled={loading}
              />
            </div>
            <Button
              type="submit"
              loading={loading}
              className="bg-white text-blue-600 hover:bg-gray-100 focus:ring-white"
            >
              Subscribe
            </Button>
          </form>

          {message && (
            <p className={[
              'mt-4 text-sm',
              message.includes('Thank you') ? 'text-green-200' : 'text-red-200'
            ].filter(Boolean).join(' ')}>
              {message}
            </p>
          )}

          <div className="flex items-center justify-center mt-8 space-x-6 text-blue-100">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Weekly insights
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No spam
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Unsubscribe anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Newsletter.displayName = 'Newsletter';

export default Newsletter;