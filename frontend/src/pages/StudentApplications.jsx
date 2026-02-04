import React, { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { getStudentApplications } from '../utils/mockData';

const tableWrapperStyle = {
  background: 'var(--card-bg, #fff)',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  overflow: 'hidden'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse'
};

const thStyle = {
  textAlign: 'left',
  padding: '12px 16px',
  fontSize: '13px',
  color: 'var(--text-muted, #6b7280)',
  background: 'var(--table-header-bg, #f8fafc)',
  borderBottom: '1px solid var(--border-color, #e5e7eb)'
};

const tdStyle = {
  padding: '12px 16px',
  borderBottom: '1px solid var(--border-color, #e5e7eb)',
  fontSize: '14px'
};

const badgeBase = {
  padding: '4px 10px',
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: 600,
  display: 'inline-block'
};

const statusColors = {
  Applied: { background: 'rgba(59,130,246,0.15)', color: '#2563eb' },
  Interview: { background: 'rgba(249,115,22,0.15)', color: '#ea580c' },
  Offer: { background: 'rgba(34,197,94,0.15)', color: '#16a34a' },
  Rejected: { background: 'rgba(239,68,68,0.15)', color: '#dc2626' }
};

function StudentApplications() {
  const [applications, setApplications] = useState([]);

  // Fetch applications on mount and set up polling to sync
  useEffect(() => {
    const updateApplications = () => {
      setApplications(getStudentApplications());
    };

    updateApplications();

    // Poll for changes every 500ms to catch updates from other pages
    const interval = setInterval(updateApplications, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardLayout>
      <h2 style={{ margin: 0 }}>Applications</h2>
      <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
        Track the status of your job applications
      </p>

      <div style={{ marginTop: '24px' }}>
        <div style={tableWrapperStyle}>
          <div style={{ overflowX: 'auto' }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Company</th>
                  <th style={thStyle}>Role</th>
                  <th style={thStyle}>Applied Date</th>
                  <th style={thStyle}>Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={`${app.company}-${app.role}`}>
                    <td style={tdStyle}>{app.company}</td>
                    <td style={tdStyle}>{app.role}</td>
                    <td style={tdStyle}>{app.appliedDate}</td>
                    <td style={tdStyle}>
                      <span
                        style={{
                          ...badgeBase,
                          ...(statusColors[app.status] || statusColors.Applied)
                        }}
                      >
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default StudentApplications;
