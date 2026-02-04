import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import { alumniStats, mentorshipRequests, alumniActivity } from '../utils/mockData';

function AlumniDashboard() {
  const [requests, setRequests] = useState(mentorshipRequests);

  const handleAccept = (id) => {
    setRequests(requests.filter(req => req.id !== id));
  };

  const handleReject = (id) => {
    setRequests(requests.filter(req => req.id !== id));
  };

  return (
    <DashboardLayout>
      <h2 style={{ margin: 0 }}>Alumni Dashboard</h2>
      <p style={{ color: 'var(--text-muted)', marginTop: '8px', marginBottom: '24px' }}>
        Manage mentorships, referrals, and track your alumni activities
      </p>

      {/* Overview Stats Cards */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '32px'
      }}>
        <StatCard title="Students Mentored" value={alumniStats.studentsMentored} icon="👨‍🎓" />
        <StatCard title="Referrals Made" value={alumniStats.referralsMade} icon="🔗" />
        <StatCard title="Active Mentorships" value={alumniStats.activeMentorships} icon="💼" />
        <StatCard title="Sessions Conducted" value={alumniStats.sessionsConducted} icon="📞" />
      </div>

      {/* Mentorship Requests Section */}
      <div style={{
        padding: '24px',
        borderRadius: '12px',
        background: 'var(--card-bg)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        marginBottom: '32px'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: '700',
          margin: '0 0 20px 0',
          color: 'var(--text-dark)'
        }}>
          Mentorship Requests ({requests.length})
        </h3>

        {requests.length === 0 ? (
          <div style={{
            padding: '40px 20px',
            textAlign: 'center',
            color: 'var(--text-muted)'
          }}>
            <p style={{ fontSize: '16px', margin: 0 }}>No pending mentorship requests.</p>
            <p style={{ fontSize: '14px', margin: '8px 0 0 0' }}>Check back later for new requests!</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {requests.map(request => (
              <div
                key={request.id}
                style={{
                  padding: '16px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color, #e5e7eb)',
                  background: 'var(--card-bg)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '8px'
                  }}>
                    <h4 style={{
                      fontSize: '15px',
                      fontWeight: '700',
                      color: 'var(--text-dark)',
                      margin: 0
                    }}>
                      {request.studentName}
                    </h4>
                    <span style={{
                      padding: '2px 10px',
                      borderRadius: '6px',
                      background: 'rgba(106, 111, 245, 0.15)',
                      color: 'var(--primary, #6a6ff5)',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {request.requestedSkill}
                    </span>
                  </div>

                  <div style={{
                    display: 'flex',
                    gap: '16px',
                    fontSize: '13px',
                    color: 'var(--text-muted)',
                    marginBottom: '8px'
                  }}>
                    <span>{request.branch}</span>
                    <span>•</span>
                    <span>{request.year}</span>
                    <span>•</span>
                    <span>{request.requestedDate}</span>
                  </div>

                  <p style={{
                    fontSize: '14px',
                    color: 'var(--text-dark)',
                    margin: '8px 0 0 0',
                    lineHeight: '1.4'
                  }}>
                    {request.message}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexShrink: 0
                }}>
                  <button
                    onClick={() => handleAccept(request.id)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '6px',
                      border: 'none',
                      background: 'var(--primary, #6a6ff5)',
                      color: '#ffffff',
                      fontWeight: '600',
                      fontSize: '13px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--primary-dark, #7a5cf0)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--primary, #6a6ff5)';
                    }}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleReject(request.id)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '6px',
                      border: '1px solid var(--border-color, #e5e7eb)',
                      background: 'transparent',
                      color: 'var(--text-dark)',
                      fontWeight: '600',
                      fontSize: '13px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--table-header-bg, #f8fafc)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recent Activity Section */}
      <div style={{
        padding: '24px',
        borderRadius: '12px',
        background: 'var(--card-bg)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: '700',
          margin: '0 0 20px 0',
          color: 'var(--text-dark)'
        }}>
          📋 Recent Activity
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {alumniActivity.map(activity => (
            <div
              key={activity.id}
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'rgba(106, 111, 245, 0.06)',
                borderLeft: '3px solid var(--primary, #6a6ff5)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <p style={{
                fontSize: '14px',
                color: 'var(--text-dark)',
                margin: 0,
                lineHeight: '1.4'
              }}>
                {activity.action}
              </p>
              <p style={{
                fontSize: '12px',
                color: 'var(--text-muted)',
                margin: 0,
                whiteSpace: 'nowrap',
                marginLeft: '12px'
              }}>
                {activity.timestamp}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AlumniDashboard;
