import React from 'react';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const tooltipPositions = {
  top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
};

const arrowPositions = {
  top: 'top-full left-1/2 transform -translate-x-1/2 border-t-gray-900 border-t-8 border-x-transparent border-x-8 border-b-0',
  bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-b-gray-900 border-b-8 border-x-transparent border-x-8 border-t-0',
  left: 'left-full top-1/2 transform -translate-y-1/2 border-l-gray-900 border-l-8 border-y-transparent border-y-8 border-r-0',
  right: 'right-full top-1/2 transform -translate-y-1/2 border-r-gray-900 border-r-8 border-y-transparent border-y-8 border-l-0',
};

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  delay = 300,
  className,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [shouldShow, setShouldShow] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const showTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShouldShow(true);
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
    setTimeout(() => setShouldShow(false), 150); // Allow for fade out animation
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {shouldShow && (
        <div
          className={[
            'absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-lg',
            'transition-opacity duration-150',
            'whitespace-nowrap',
            tooltipPositions[position],
            isVisible ? 'opacity-100' : 'opacity-0',
            className
          ].filter(Boolean).join(' ')}
          role="tooltip"
        >
          {content}
          <div
            className={[
              'absolute w-0 h-0',
              arrowPositions[position]
            ].filter(Boolean).join(' ')}
          />
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;