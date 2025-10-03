import React from 'react';

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
  variant?: 'horizontal' | 'vertical';
  platforms?: ('twitter' | 'facebook' | 'linkedin' | 'reddit' | 'email' | 'copy')[];
}

const ShareButtons: React.FC<ShareButtonsProps> = ({
  url,
  title,
  description = '',
  className,
  variant = 'horizontal',
  platforms = ['twitter', 'facebook', 'linkedin', 'reddit', 'email', 'copy']
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // You could add a toast notification here
      alert('Link copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  const shareButtons = [
    {
      platform: 'twitter',
      label: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
      color: 'hover:text-blue-400',
      onClick: () => window.open(shareUrls.twitter, '_blank', 'width=550,height=420')
    },
    {
      platform: 'facebook',
      label: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
        </svg>
      ),
      color: 'hover:text-blue-600',
      onClick: () => window.open(shareUrls.facebook, '_blank', 'width=550,height=420')
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
      ),
      color: 'hover:text-blue-700',
      onClick: () => window.open(shareUrls.linkedin, '_blank', 'width=550,height=420')
    },
    {
      platform: 'reddit',
      label: 'Reddit',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M16.5 10.5c0-.28-.115-.534-.3-.718A1.027 1.027 0 0015.5 9.5c-.28 0-.534.115-.718.3A1.027 1.027 0 0014.5 10.5c0 .28.115.534.3.718.184.185.438.3.718.3.28 0 .534-.115.718-.3.185-.184.3-.438.3-.718zM20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zM2 10c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8z" />
        </svg>
      ),
      color: 'hover:text-orange-600',
      onClick: () => window.open(shareUrls.reddit, '_blank', 'width=550,height=420')
    },
    {
      platform: 'email',
      label: 'Email',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'hover:text-gray-700',
      onClick: () => window.location.href = shareUrls.email
    },
    {
      platform: 'copy',
      label: 'Copy Link',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      color: 'hover:text-green-600',
      onClick: handleCopyLink
    }
  ];

  const filteredButtons = shareButtons.filter(button => 
    platforms.includes(button.platform as any)
  );

  return (
    <div className={[
      'flex gap-3',
      variant === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
      className
    ].filter(Boolean).join(' ')}>
      {filteredButtons.map((button) => (
        <button
          key={button.platform}
          onClick={button.onClick}
          className={[
            'inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 rounded-md',
            'border border-gray-300 bg-white hover:bg-gray-50 transition-colors',
            button.color
          ].filter(Boolean).join(' ')}
          aria-label={`Share on ${button.label}`}
        >
          {button.icon}
          <span>{button.label}</span>
        </button>
      ))}
    </div>
  );
};

ShareButtons.displayName = 'ShareButtons';

export default ShareButtons;