import React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  lines?: number;
  animate?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'text',
  width,
  height,
  lines = 1,
  animate = true,
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'rectangular':
        return 'rounded-md';
      case 'text':
      default:
        return 'rounded';
    }
  };

  const getDefaultDimensions = () => {
    switch (variant) {
      case 'circular':
        return { width: '40px', height: '40px' };
      case 'rectangular':
        return { width: '100%', height: '200px' };
      case 'text':
      default:
        return { width: '100%', height: '1em' };
    }
  };

  const defaults = getDefaultDimensions();
  const skeletonWidth = width || defaults.width;
  const skeletonHeight = height || defaults.height;

  const baseClasses = [
    'bg-gray-200',
    animate && 'animate-pulse',
    getVariantClasses(),
    className
  ].filter(Boolean).join(' ');

  const style: React.CSSProperties = {
    width: typeof skeletonWidth === 'number' ? `${skeletonWidth}px` : skeletonWidth,
    height: typeof skeletonHeight === 'number' ? `${skeletonHeight}px` : skeletonHeight,
  };

  // For text variant with multiple lines
  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2" {...props}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={[
              baseClasses,
              index === lines - 1 && 'w-3/4' // Make last line shorter
            ].filter(Boolean).join(' ')}
            style={{
              width: index === lines - 1 ? '75%' : style.width,
              height: style.height,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={baseClasses}
      style={style}
      {...props}
    />
  );
};

// Predefined skeleton components for common use cases
const SkeletonText: React.FC<Omit<SkeletonProps, 'variant'>> = (props) => (
  <Skeleton variant="text" {...props} />
);

const SkeletonCircular: React.FC<Omit<SkeletonProps, 'variant'>> = (props) => (
  <Skeleton variant="circular" {...props} />
);

const SkeletonRectangular: React.FC<Omit<SkeletonProps, 'variant'>> = (props) => (
  <Skeleton variant="rectangular" {...props} />
);

// Avatar skeleton component
const SkeletonAvatar: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizes = {
    sm: '32px',
    md: '40px',
    lg: '48px',
  };

  return (
    <SkeletonCircular
      width={sizes[size]}
      height={sizes[size]}
    />
  );
};

// Card skeleton component
const SkeletonCard: React.FC = () => (
  <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
    <div className="flex items-center space-x-4 mb-4">
      <SkeletonAvatar />
      <div className="flex-1">
        <SkeletonText width="60%" height="16px" />
        <SkeletonText width="40%" height="14px" className="mt-2" />
      </div>
    </div>
    <SkeletonText lines={3} height="14px" />
    <div className="flex space-x-2 mt-4">
      <SkeletonRectangular width="80px" height="32px" />
      <SkeletonRectangular width="80px" height="32px" />
    </div>
  </div>
);

Skeleton.displayName = 'Skeleton';
SkeletonText.displayName = 'SkeletonText';
SkeletonCircular.displayName = 'SkeletonCircular';
SkeletonRectangular.displayName = 'SkeletonRectangular';
SkeletonAvatar.displayName = 'SkeletonAvatar';
SkeletonCard.displayName = 'SkeletonCard';

export default Skeleton;
export {
  SkeletonText,
  SkeletonCircular,
  SkeletonRectangular,
  SkeletonAvatar,
  SkeletonCard,
};