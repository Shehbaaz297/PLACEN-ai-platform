// Refactor StudentProfile to read data from studentProfile in mockData.

import React from 'react';  

import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import { studentStats } from '../utils/mockData';

function StudentDashboard() {
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
        <StatCard title="Applications" value={studentStats.applications} icon="📝" />
        <StatCard title="Interviews" value={studentStats.interviews} icon="💬" />
        <StatCard title="Offers" value={studentStats.offers} icon="🎉" />
        <StatCard title="Profile Status" value={`${studentStats.profileCompletion}%`} progress={studentStats.profileCompletion} />
      </div>
    </DashboardLayout>
  );
}

export default StudentDashboard;
