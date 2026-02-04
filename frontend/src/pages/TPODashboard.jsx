import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import { tpoStats, collegeStudents, partnerCompanies } from '../utils/mockData';

function TPODashboard() {
  return (
    <DashboardLayout>
      <h2 style={{ margin: 0 }}>TPO Dashboard</h2>
      <p style={{ color: 'var(--text-muted)', marginTop: '8px', marginBottom: '24px' }}>
        Manage placements, monitor student progress, and coordinate with companies
      </p>

      {/* Overview Stats Cards */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '32px'
      }}>
        <StatCard title="Total Students" value={tpoStats.totalStudents} icon="👥" />
        <StatCard title="Companies Registered" value={tpoStats.companiesRegistered} icon="🏢" />
        <StatCard title="Students Placed" value={tpoStats.studentsPlaced} icon="✅" />
        <StatCard title="Average Package" value={tpoStats.averagePackage} icon="💰" />
      </div>

      {/* Quick Actions Section */}
      <div style={{
        padding: '20px',
        borderRadius: '12px',
        background: 'var(--card-bg)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        marginBottom: '32px'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: '700',
          margin: '0 0 16px 0',
          color: 'var(--text-dark)'
        }}>
          ⚡ Quick Actions
        </h3>
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          <button
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              background: 'var(--primary, #6a6ff5)',
              color: '#ffffff',
              fontWeight: '600',
              fontSize: '14px',
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
            Approve Company
          </button>
          <button
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: '1px solid var(--border-color, #e5e7eb)',
              background: 'transparent',
              color: 'var(--text-dark)',
              fontWeight: '600',
              fontSize: '14px',
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
            Generate Placement Report
          </button>
          <button
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: '1px solid var(--border-color, #e5e7eb)',
              background: 'transparent',
              color: 'var(--text-dark)',
              fontWeight: '600',
              fontSize: '14px',
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
            Notify Students
          </button>
        </div>
      </div>

      {/* Student Overview Section */}
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
          Student Overview
        </h3>

        <div style={{
          overflowX: 'auto',
          borderRadius: '8px',
          border: '1px solid var(--border-color, #e5e7eb)'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse'
          }}>
            <thead>
              <tr style={{ background: 'var(--table-header-bg, #f8fafc)' }}>
                <th style={{
                  textAlign: 'left',
                  padding: '12px 16px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  borderBottom: '1px solid var(--border-color, #e5e7eb)'
                }}>
                  Name
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '12px 16px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  borderBottom: '1px solid var(--border-color, #e5e7eb)'
                }}>
                  Branch
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '12px 16px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  borderBottom: '1px solid var(--border-color, #e5e7eb)'
                }}>
                  CGPA
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '12px 16px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  borderBottom: '1px solid var(--border-color, #e5e7eb)'
                }}>
                  Status
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '12px 16px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  borderBottom: '1px solid var(--border-color, #e5e7eb)'
                }}>
                  Company
                </th>
              </tr>
            </thead>
            <tbody>
              {collegeStudents.map((student) => (
                <tr key={student.id}>
                  <td style={{
                    padding: '12px 16px',
                    fontSize: '14px',
                    color: 'var(--text-dark)',
                    borderBottom: '1px solid var(--border-color, #e5e7eb)'
                  }}>
                    {student.name}
                  </td>
                  <td style={{
                    padding: '12px 16px',
                    fontSize: '14px',
                    color: 'var(--text-dark)',
                    borderBottom: '1px solid var(--border-color, #e5e7eb)'
                  }}>
                    {student.branch}
                  </td>
                  <td style={{
                    padding: '12px 16px',
                    fontSize: '14px',
                    color: 'var(--text-dark)',
                    borderBottom: '1px solid var(--border-color, #e5e7eb)'
                  }}>
                    {student.cgpa}
                  </td>
                  <td style={{
                    padding: '12px 16px',
                    fontSize: '14px',
                    borderBottom: '1px solid var(--border-color, #e5e7eb)'
                  }}>
                    <span style={{
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: '600',
                      background: student.placementStatus === 'Placed'
                        ? 'rgba(34, 197, 94, 0.15)'
                        : 'rgba(239, 68, 68, 0.15)',
                      color: student.placementStatus === 'Placed'
                        ? '#16a34a'
                        : '#dc2626'
                    }}>
                      {student.placementStatus}
                    </span>
                  </td>
                  <td style={{
                    padding: '12px 16px',
                    fontSize: '14px',
                    color: 'var(--text-dark)',
                    borderBottom: '1px solid var(--border-color, #e5e7eb)'
                  }}>
                    {student.company}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Company Overview Section */}
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
          Partner Companies
        </h3>

        <div style={{
          overflowX: 'auto',
          borderRadius: '8px',
          border: '1px solid var(--border-color, #e5e7eb)'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse'
          }}>
            <thead>
              <tr style={{ background: 'var(--table-header-bg, #f8fafc)' }}>
                <th style={{
                  textAlign: 'left',
                  padding: '12px 16px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  borderBottom: '1px solid var(--border-color, #e5e7eb)'
                }}>
                  Company Name
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '12px 16px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  borderBottom: '1px solid var(--border-color, #e5e7eb)'
                }}>
                  Roles Offered
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '12px 16px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  borderBottom: '1px solid var(--border-color, #e5e7eb)'
                }}>
                  Students Hired
                </th>
                <th style={{
                  textAlign: 'left',
                  padding: '12px 16px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  borderBottom: '1px solid var(--border-color, #e5e7eb)'
                }}>
                  Package Range
                </th>
              </tr>
            </thead>
            <tbody>
              {partnerCompanies.map((company) => (
                <tr key={company.id}>
                  <td style={{
                    padding: '12px 16px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--text-dark)',
                    borderBottom: '1px solid var(--border-color, #e5e7eb)'
                  }}>
                    {company.companyName}
                  </td>
                  <td style={{
                    padding: '12px 16px',
                    fontSize: '14px',
                    color: 'var(--text-dark)',
                    borderBottom: '1px solid var(--border-color, #e5e7eb)'
                  }}>
                    {company.rolesOffered}
                  </td>
                  <td style={{
                    padding: '12px 16px',
                    fontSize: '14px',
                    color: 'var(--text-dark)',
                    borderBottom: '1px solid var(--border-color, #e5e7eb)'
                  }}>
                    {company.studentsHired}
                  </td>
                  <td style={{
                    padding: '12px 16px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--primary, #6a6ff5)',
                    borderBottom: '1px solid var(--border-color, #e5e7eb)'
                  }}>
                    {company.package}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default TPODashboard;
