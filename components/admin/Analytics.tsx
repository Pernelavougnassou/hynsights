import React from 'react';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';

interface AnalyticsData {
  pageViews: number[];
  uniqueVisitors: number[];
  topPages: { page: string; views: number }[];
  referrers: { source: string; visits: number }[];
}

interface AnalyticsProps {
  data: AnalyticsData;
  className?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({
  data,
  className
}) => {
  return (
    <div className={[
      'space-y-6',
      className
    ].filter(Boolean).join(' ')}>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">Track your blog's performance and audience engagement.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Top Pages</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.topPages.length > 0 ? (
                data.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 truncate">{page.page}</span>
                    <span className="text-sm font-medium">{page.views.toLocaleString()}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No data available</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Traffic Sources</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.referrers.length > 0 ? (
                data.referrers.map((referrer, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{referrer.source}</span>
                    <span className="text-sm font-medium">{referrer.visits.toLocaleString()}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No data available</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Traffic Overview</h3>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-sm">Chart visualization would go here</p>
              <p className="text-xs text-gray-400 mt-1">Integrate with your analytics provider</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

Analytics.displayName = 'Analytics';

export default Analytics;