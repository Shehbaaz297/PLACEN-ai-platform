import React, { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { getAvailableJobs, applyToJob } from '../utils/mockData';

function StudentJobs() {
  const [jobs, setJobs] = useState([]);
  const [filterType, setFilterType] = useState('All');

  // Initialize jobs on mount
  useEffect(() => {
    setJobs(getAvailableJobs());
  }, []);

  const handleApply = (jobId) => {
    // Apply to job and update state
    const success = applyToJob(jobId);
    if (success) {
      // Get fresh jobs state and update UI
      setJobs([...getAvailableJobs()]);
    }
  };

  const filteredJobs = filterType === 'All'
    ? jobs
    : jobs.filter(job => job.type === filterType);

  return (
    <DashboardLayout>
      <h2 style={{ margin: 0 }}>Available Jobs & Internships</h2>
      <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
        Explore and apply to opportunities that match your profile
      </p>

      {/* Filter Section */}
      <div style={{
        display: 'flex',
        gap: '12px',
        marginTop: '24px',
        marginBottom: '24px',
        flexWrap: 'wrap'
      }}>
        {['All', 'Internships', 'Placements'].map(filter => (
          <button
            key={filter}
            onClick={() => setFilterType(filter)}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: '1px solid var(--border-color, #e0e0e0)',
              background: filterType === filter
                ? 'var(--accent, #3b82f6)'
                : 'var(--card-bg)',
              color: filterType === filter
                ? '#ffffff'
                : 'var(--text-primary, #111)',
              cursor: 'pointer',
              fontWeight: filterType === filter ? '600' : '500',
              fontSize: '14px',
              transition: 'all 0.2s ease'
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Jobs Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '20px'
      }}>
        {filteredJobs.map(job => (
          <div
            key={job.id}
            style={{
              padding: '20px',
              borderRadius: '12px',
              background: 'var(--card-bg)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              transition: 'box-shadow 0.2s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}
          >
            {/* Header with Company and Job Type */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '12px'
            }}>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  margin: '0 0 4px 0',
                  fontWeight: '500'
                }}>
                  {job.company}
                </p>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  margin: '0',
                  color: 'var(--text-dark)',
                  lineHeight: '1.3'
                }}>
                  {job.title}
                </h3>
              </div>
              <div style={{
                padding: '4px 10px',
                borderRadius: '6px',
                background: job.type === 'Internship'
                  ? 'rgba(59, 130, 246, 0.1)'
                  : 'rgba(34, 197, 94, 0.1)',
                color: job.type === 'Internship'
                  ? '#3b82f6'
                  : '#22c55e',
                fontSize: '12px',
                fontWeight: '600',
                whiteSpace: 'nowrap'
              }}>
                {job.type}
              </div>
            </div>

            {/* Location and Package */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '12px'
            }}>
              <div>
                <p style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  Location
                </p>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-dark)',
                  margin: '4px 0 0 0'
                }}>
                  {job.location}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  {job.type === 'Internship' ? 'Stipend' : 'Package'}
                </p>
                <p style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  color: 'var(--primary, #6a6ff5)',
                  margin: '4px 0 0 0'
                }}>
                  {job.package}
                </p>
              </div>
            </div>

            {/* Skills Tags */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {job.skills.map((skill, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '20px',
                    background: 'rgba(106, 111, 245, 0.1)',
                    color: 'var(--primary, #6a6ff5)',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* Apply Button */}
            <button
              onClick={() => handleApply(job.id)}
              disabled={job.applied}
              style={{
                padding: '10px 16px',
                borderRadius: '8px',
                border: 'none',
                background: job.applied
                  ? 'var(--text-muted, #6b7280)'
                  : 'var(--primary, #6a6ff5)',
                color: '#ffffff',
                fontWeight: '600',
                fontSize: '14px',
                cursor: job.applied ? 'not-allowed' : 'pointer',
                opacity: job.applied ? 0.7 : 1,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (!job.applied) {
                  e.currentTarget.style.background = 'var(--primary-dark, #7a5cf0)';
                }
              }}
              onMouseLeave={(e) => {
                if (!job.applied) {
                  e.currentTarget.style.background = 'var(--primary, #6a6ff5)';
                }
              }}
            >
              {job.applied ? 'Applied' : 'Apply'}
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredJobs.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          color: 'var(--text-muted)'
        }}>
          <p style={{ fontSize: '16px', marginBottom: '8px' }}>
            No {filterType !== 'All' ? filterType.toLowerCase() : 'jobs'} available at the moment.
          </p>
          <p style={{ fontSize: '14px' }}>
            Please check back later or try a different filter.
          </p>
        </div>
      )}
    </DashboardLayout>
  );
}

export default StudentJobs;
