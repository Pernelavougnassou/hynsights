import Dashboard from '@/components/admin/Dashboard';

export default function AdminDashboardPage() {
  // Mock data - replace with real data from your API
  const stats = {
    totalArticles: 142,
    totalViews: 25840,
    totalSubscribers: 1250,
    averageReadTime: 6
  };

  return <Dashboard stats={stats} />;
}