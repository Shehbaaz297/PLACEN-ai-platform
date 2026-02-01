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
function Sidebar() {
  const activeItem = 'Dashboard';
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
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {['Dashboard', 'Profile', 'Applications', 'Interviews', 'Offers', 'Settings'].map((item) => (
          <div
            key={item}
            style={{
              padding: '12px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              color: 'var(--text-primary, #111)',
              background: item === activeItem ? 'var(--accent-bg, #e0f2fe)' : 'transparent',
              fontWeight: item === activeItem ? '600' : '400',
              borderLeft: item === activeItem ? '4px solid var(--accent, #3b82f6)' : '4px solid transparent'
            }}
          >
            {item}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar; 
// is it done?                 