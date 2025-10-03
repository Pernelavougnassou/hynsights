import React from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
  activeId?: string;
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  headings,
  activeId,
  className
}) => {
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <nav className={[
      'bg-white rounded-lg border border-gray-200 p-6',
      isSticky ? 'sticky top-24' : '',
      className
    ].filter(Boolean).join(' ')}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={[
                'block w-full text-left text-sm transition-colors hover:text-blue-600',
                heading.level === 2 ? 'pl-0' : heading.level === 3 ? 'pl-4' : 'pl-6',
                activeId === heading.id
                  ? 'text-blue-600 font-medium'
                  : 'text-gray-600'
              ].filter(Boolean).join(' ')}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

TableOfContents.displayName = 'TableOfContents';

export default TableOfContents;