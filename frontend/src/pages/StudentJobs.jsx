import React, { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { fetchAvailableJobs, applyToJobAPI } from '../utils/api';
import { getAvailableJobs as getMockJobs, getStudentApplications as getMockApplications } from '../utils/mockData';

function StudentJobs() {
  const [jobs, setJobs] = useState([]);
  const [appliedJobIds, setAppliedJobIds] = useState(new Set());
  const [filterType, setFilterType] = useState('All');
  const [loading, setLoading] = useState(true);
  const [usedMockData, setUsedMockData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { jobs: fetchedJobs, fromMock: jobsFromMock } = await fetchAvailableJobs();
        setUsedMockData(jobsFromMock);

        let appliedCompaniesRoles = new Set();
        if (jobsFromMock) {
          const mockApps = getMockApplications();
          appliedCompaniesRoles = new Set(
            mockApps.map(app => `${app.company}|${app.role}`)
          );
        } else {
          try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            const response = await fetch(`${apiUrl}/student/applications`);
            if (response.ok) {
              const applications = await response.json();
              appliedCompaniesRoles = new Set(
                applications.map(app => `${app.companyName}|${app.position}`)
              );
            }
          } catch (err) {
            console.warn('Could not fetch applications:', err);
          }
        }

        const jobsWithAppliedStatus = fetchedJobs.map(job => ({
          ...job,
          applied: appliedCompaniesRoles.has(`${job.company}|${job.title}`)
        }));

        setJobs(jobsWithAppliedStatus);
        const appliedIds = new Set(
          jobsWithAppliedStatus
            .filter(j => j.applied)
            .map(j => j.id)
        );
        setAppliedJobIds(appliedIds);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        const mockJobs = getMockJobs();
        const mockApps = getMockApplications();
        const appliedSet = new Set(
          mockApps.map(app => `${app.company}|${app.role}`)
        );
        const jobsWithStatus = mockJobs.map(job => ({
          ...job,
          applied: appliedSet.has(`${job.company}|${job.title}`)
        }));
        setJobs(jobsWithStatus);
        setUsedMockData(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleApply = async (jobId) => {
    if (appliedJobIds.has(jobId)) {
      alert('You have already applied to this job');
      return;
    }

    try {
      setAppliedJobIds(prev => new Set([...prev, jobId]));
      const { success, error: applyError } = await applyToJobAPI(jobId);

      if (!success) {
        setAppliedJobIds(prev => {
          const newSet = new Set(prev);
          newSet.delete(jobId);
          return newSet;
        });
        alert(applyError || 'Failed to apply to job');
        return;
      }

      setJobs(jobs.map(job => 
        job.id === jobId ? { ...job, applied: true } : job
      ));
      alert('Application submitted successfully!');
    } catch (err) {
      setAppliedJobIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(jobId);
        return newSet;
      });
      alert('Error applying to job: ' + err.message);
      console.error('Error:', err);
    }
  };

  const filteredJobs = filterType === 'All'
    ? jobs
    : jobs.filter(job => job.type === filterType);

  if (loading) {
    return (
      <DashboardLayout>
        <h2 style={{ margin: 0 }}>Available Jobs & Internships</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Loading...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <h2 style={{ margin: 0 }}>Available Jobs & Internships</h2>
      <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
        Explore and apply to opportunities that match your profile
      </p>

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

      <div style={{
        display: 'flex',
        gap: '12px',
        marginTop: '24px',
        marginBottom: '24px',
        flexWrap: 'wrap'
      }}>
        {['All', 'Placement', 'Internship'].map(filter => (
          <button
            key={filter}
            onClick={() => setFilterType(filter)}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: '1px solid var(--border-color, #e0e0e0)',
              background: filterType === filter ? 'var(--accent, #3b82f6)' : 'var(--card-bg)',
              color: filterType === filter ? '#ffffff' : 'var(--text-primary, #111)',
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

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '20px'
      }}>
        {filteredJobs.map(job => (
          <div key={job.id} style={{
            padding: '20px',
            borderRadius: '12px',
            background: 'var(--card-bg)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}>
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
                background: job.type === 'Internship' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(34, 197, 94, 0.1)',
                color: job.type === 'Internship' ? '#3b82f6' : '#22c55e',
                fontSize: '12px',
                fontWeight: '600',
                whiteSpace: 'nowrap'
              }}>
                {job.type}
              </div>
            </div>

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

            <button
              onClick={() => handleApply(job.id)}
              disabled={appliedJobIds.has(job.id)}
              style={{
                padding: '10px 16px',
                borderRadius: '8px',
                border: 'none',
                background: appliedJobIds.has(job.id) ? 'var(--text-muted, #6b7280)' : 'var(--primary, #6a6ff5)',
                color: '#ffffff',
                fontWeight: '600',
                fontSize: '14px',
                cursor: appliedJobIds.has(job.id) ? 'not-allowed' : 'pointer',
                opacity: appliedJobIds.has(job.id) ? 0.7 : 1,
                transition: 'all 0.2s ease'
              }}
            >
              {appliedJobIds.has(job.id) ? 'Applied' : 'Apply'}
            </button>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          color: 'var(--text-muted)'
        }}>
          <p style={{ fontSize: '16px', marginBottom: '8px' }}>
            No {filterType !== 'All' ? filterType.toLowerCase() : 'jobs'} available at the moment.
          </p>
        </div>
      )}
    </DashboardLayout>
  );
}

export default StudentJobs;
