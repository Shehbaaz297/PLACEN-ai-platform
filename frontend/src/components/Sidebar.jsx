// Create a Sidebar component for a student dashboard.
// Include a vertical navigation with items:
// Dashboard, Profile, Applications, Interviews, Offers, Settings.
// Design: fixed width, light background, subtle border-right,
// active item highlight, clean spacing.
// Use inline styles or existing CSS variables.
// No routing logic yet, just UI.

// Add navigation item for "Profile".
// Highlight active item visually (background or left border).

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const studentMenuItems = [
    { label: 'Dashboard', path: '/student/dashboard' },
    { label: 'Jobs', path: '/student/jobs' },
    { label: 'Applications', path: '/student/applications' },
    { label: 'Analytics', path: '/student/analytics' },
    { label: 'Profile', path: '/student/profile' }
  ];

  const companyMenuItems = [
    { label: 'Company Dashboard', path: '/company/dashboard' },
    { label: 'Post Job', path: '/company/post-job' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div
      style={{
        width: '240px',
        height: '100vh',
        background: 'var(--sidebar-bg, #f9f9f9)',
        borderRight: '1px solid var(--border-color, #e0e0e0)',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px',
        boxSizing: 'border-box'
      }}
    >
      <h1
        style={{
          fontSize: '20px',
          fontWeight: '700',
          marginBottom: '32px',
          color: 'var(--text-primary, #111)'
        }}
      >
        Student Portal
      </h1>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {studentMenuItems.map((item) => (
          <div
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              padding: '12px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              color: isActive(item.path) ? 'var(--accent, #3b82f6)' : 'var(--text-primary, #111)',
              background: isActive(item.path) ? 'var(--accent-bg, #e0f2fe)' : 'transparent',
              fontWeight: isActive(item.path) ? '600' : '400',
              borderLeft: isActive(item.path) ? '4px solid var(--accent, #3b82f6)' : '4px solid transparent',
              transition: 'all 0.2s ease'
            }}
          >
            {item.label}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;                 