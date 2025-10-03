import React from 'react';

interface ScrollToTopProps {
  className?: string;
  threshold?: number;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  className,
  threshold = 300
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > threshold);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={[
        'fixed bottom-6 right-6 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg',
        'hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        'transition-all duration-300 transform hover:scale-105',
        className
      ].filter(Boolean).join(' ')}
      aria-label="Scroll to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

ScrollToTop.displayName = 'ScrollToTop';

export default ScrollToTop;