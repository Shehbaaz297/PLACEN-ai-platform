// Refactor StudentProfile to read data from studentProfile in mockData.

import React, { useState, useEffect } from 'react';  

import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import { getCalculatedStats } from '../utils/mockData';

function StudentDashboard() {
  const [stats, setStats] = useState({
    applications: 0,
    interviews: 0,
    offers: 0,
    profileCompletion: 85
  });

  // Fetch stats on mount and set up polling for real-time updates
  useEffect(() => {
    const updateStats = () => {
      setStats(getCalculatedStats());
    };

    updateStats();

    // Poll for changes every 500ms to catch updates from StudentJobs page
    const interval = setInterval(updateStats, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardLayout>
      <h2 style={{ margin: 0 }}>Student Dashboard</h2>
      <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
        Track your placement journey
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        marginTop: '24px'
      }}>
        <StatCard title="Applications" value={stats.applications} icon="📝" />
        <StatCard title="Interviews" value={stats.interviews} icon="💬" />
        <StatCard title="Offers" value={stats.offers} icon="🎉" />
        <StatCard title="Profile Status" value={`${stats.profileCompletion}%`} progress={stats.profileCompletion} />
      </div>
    </DashboardLayout>
  );
}

export default StudentDashboard;
