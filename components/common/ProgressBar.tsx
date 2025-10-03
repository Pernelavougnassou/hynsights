import React from 'react';

interface ProgressBarProps {
  progress: number;
  className?: string;
  showPercentage?: boolean;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className,
  showPercentage = false,
  color = 'blue'
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  const colorClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-600',
    purple: 'bg-purple-600'
  };

  return (
    <div className={[
      'relative',
      className
    ].filter(Boolean).join(' ')}>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className={[
            'h-2 rounded-full transition-all duration-300 ease-out',
            colorClasses[color]
          ].filter(Boolean).join(' ')}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      {showPercentage && (
        <div className="text-xs text-gray-600 mt-1 text-center">
          {Math.round(clampedProgress)}%
        </div>
      )}
    </div>
  );
};

// Reading Progress Bar for articles
interface ReadingProgressBarProps {
  className?: string;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
}

export const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({
  className,
  color = 'blue'
}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const colorClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-600',
    purple: 'bg-purple-600'
  };

  return (
    <div className={[
      'fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200',
      className
    ].filter(Boolean).join(' ')}>
      <div
        className={[
          'h-full transition-all duration-150 ease-out',
          colorClasses[color]
        ].filter(Boolean).join(' ')}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;