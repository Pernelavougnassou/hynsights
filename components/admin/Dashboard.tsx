import React from 'react';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';

interface DashboardStats {
  totalArticles: number;
  totalViews: number;
  totalSubscribers: number;
  averageReadTime: number;
}

interface DashboardProps {
  stats: DashboardStats;
  className?: string;
}

const Dashboard: React.FC<DashboardProps> = ({
  stats,
  className
}) => {
  const statCards = [
    {
      title: 'Total Articles',
      value: stats.totalArticles.toLocaleString(),
      icon: '📝',
      color: 'bg-blue-500'
    },
    {
      title: 'Total Views',
      value: stats.totalViews.toLocaleString(),
      icon: '👀',
      color: 'bg-green-500'
    },
    {
      title: 'Subscribers',
      value: stats.totalSubscribers.toLocaleString(),
      icon: '📧',
      color: 'bg-purple-500'
    },
    {
      title: 'Avg Read Time',
      value: `${stats.averageReadTime}m`,
      icon: '⏱️',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className={[
      'space-y-6',
      className
    ].filter(Boolean).join(' ')}>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your blog.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-full ${stat.color} bg-opacity-10 mr-4`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Recent Articles</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Placeholder for recent articles */}
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-600">No recent articles to display</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Popular Articles</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Placeholder for popular articles */}
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-600">No popular articles to display</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

Dashboard.displayName = 'Dashboard';

export default Dashboard;