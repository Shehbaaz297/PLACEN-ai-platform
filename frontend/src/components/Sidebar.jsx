import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../utils/auth';

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const studentMenuItems = [
    { label: 'Dashboard', path: '/student/dashboard' },
    { label: 'Jobs', path: '/student/jobs' },
    { label: 'Applications', path: '/student/applications' },
    { label: 'Analytics', path: '/student/analytics' },
    { label: 'Profile', path: '/student/profile' }
  ];

  const alumniMenuItems = [
    { label: 'Alumni Dashboard', path: '/alumni/dashboard' }
  ];

  const tpoMenuItems = [
    { label: 'TPO Dashboard', path: '/tpo/dashboard' }
  ];

  const companyMenuItems = [
    { label: 'Company Dashboard', path: '/company/dashboard' },
    { label: 'Post Job', path: '/company/post-job' }
  ];

  // Determine which menu to show based on user role
  let menuItems = [];
  let portalTitle = 'Student Portal';

  if (currentUser?.role === 'alumni') {
    menuItems = alumniMenuItems;
    portalTitle = 'Alumni Portal';
  } else if (currentUser?.role === 'tpo') {
    menuItems = tpoMenuItems;
    portalTitle = 'TPO Portal';
  } else if (currentUser?.role === 'company') {
    menuItems = companyMenuItems;
    portalTitle = 'Company Portal';
  } else {
    menuItems = studentMenuItems;
  }

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
        {portalTitle}
      </h1>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {menuItems.map((item) => (
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