import React from 'react';

interface Stat {
  id: string;
  label: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
}

interface StatsSectionProps {
  stats: Stat[];
  title?: string;
  className?: string;
}

const defaultStats: Stat[] = [
  {
    id: '1',
    label: 'Articles Published',
    value: '150+',
    description: 'In-depth insights and analysis',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
      </svg>
    )
  },
  {
    id: '2',
    label: 'Monthly Readers',
    value: '25K+',
    description: 'Growing community of curious minds',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: '3',
    label: 'Years of Experience',
    value: '8+',
    description: 'Sharing knowledge and insights',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: '4',
    label: 'Categories Covered',
    value: '10+',
    description: 'Diverse topics and perspectives',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5c-1.105 0-2 .9-2 2v12c0 1.1.895 2 2 2h14c1.105 0 2-.9 2-2V6c0-1.1-.895-2-2-2z" />
      </svg>
    )
  }
];

const StatsSection: React.FC<StatsSectionProps> = ({
  stats = defaultStats,
  title = "Growing Impact",
  className
}) => {
  return (
    <section className={[
      'py-16 sm:py-24 bg-gray-50',
      className
    ].filter(Boolean).join(' ')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to sharing valuable insights continues to grow, reaching more curious minds every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-gray-900 mb-2">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-gray-600">
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

StatsSection.displayName = 'StatsSection';

export default StatsSection;