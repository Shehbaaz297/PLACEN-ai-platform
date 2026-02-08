// Student Dashboard - fetches stats from backend with fallback to mock data

import React, { useState, useEffect } from 'react';  

import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import { getStudentStats } from '../utils/api';
import { getCalculatedStats } from '../utils/mockData';

function StudentDashboard() {
  const [stats, setStats] = useState({
    applications: 0,
    interviews: 0,
    offers: 0,
    profileCompletion: 85
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usedMockData, setUsedMockData] = useState(false);

  // Fetch stats from backend or fallback to mock data
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);
        const { stats: fetchedStats, fromMock } = await getStudentStats();
        setStats(fetchedStats);
        setUsedMockData(fromMock);
      } catch (err) {
        console.error('Error fetching stats:', err);
        // Fallback to mock data on error
        setStats(getCalculatedStats());
        setUsedMockData(true);
        setError('Using cached data');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    
    // Poll every 5 seconds for updates (reduced frequency)
    const interval = setInterval(fetchStats, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardLayout>
      <h2 style={{ margin: 0 }}>Student Dashboard</h2>
      <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
        Track your placement journey
      {usedMockData && (
        <div style={{
          padding: '12px 16px',
          borderRadius: '8px',
          background: 'rgba(59, 130, 246, 0.1)',
          color: '#2563eb',
          marginTop: '16px',
          fontSize: '13px'
        }}>
          💡 Showing cached data - backend may be offline
        </div>
      )}

      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        marginTop: '24px'
      }}>
        {loading ? (
          <div style={{ color: 'var(--text-muted)' }}>Loading stats...</div>
        ) : (
          <>
            <StatCard title="Applications" value={stats.applications} icon="📝" />
            <StatCard title="Interviews" value={stats.interviews} icon="💬" />
            <StatCard title="Offers" value={stats.offers} icon="🎉" />
            <StatCard title="Profile Status" value={`${stats.profileCompletion}%`} progress={stats.profileCompletion} />
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

export default StudentDashboard;
