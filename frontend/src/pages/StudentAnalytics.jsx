import React, { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import { studentProfile } from '../utils/mockData';
import { getStudentStats, fetchStudentApplications } from '../utils/api';

function StudentAnalytics() {
  const [stats, setStats] = useState({
    applications: 0,
    interviews: 0,
    offers: 0,
    profileCompletion: 85
  });
  const [applications, setApplications] = useState([]);
  const [parsedSkills, setParsedSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usedMockData, setUsedMockData] = useState(false);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async (isBackground = false) => {
      try {
        if (!isBackground) {
          setLoading(true);
        }

        const [statsResult, appsResult] = await Promise.all([
          getStudentStats(),
          fetchStudentApplications()
        ]);

        setStats({
          applications: appsResult.applications.length,
          interviews: statsResult.stats.interviews,
          offers: statsResult.stats.offers,
          profileCompletion: statsResult.stats.profileCompletion
        });

        setApplications(appsResult.applications);
        setUsedMockData(statsResult.fromMock || appsResult.fromMock);

        // Load parsed skills from localStorage
        try {
          const storedParsed = localStorage.getItem('placen_resume_parsed');
          if (storedParsed) {
            const parsed = JSON.parse(storedParsed);
            if (Array.isArray(parsed.skills)) {
              setParsedSkills(parsed.skills);
            }
          } else {
            setParsedSkills([]);
          }
        } catch (error) {
          console.error('Failed to read parsed resume skills:', error);
          setParsedSkills([]);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        if (!isBackground) {
          setLoading(false);
        }
      }
    };

    fetchData(false);

    // Poll every 5 seconds
    const interval = setInterval(() => {
      fetchData(true);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculate funnel data
  const appliedCount = stats.applications;
  const interviewCount = stats.interviews;
  const offerCount = stats.offers;

  // Calculate conversion rates
  const appliedToInterviewRate = appliedCount > 0 ? Math.round((interviewCount / appliedCount) * 100) : 0;
  const interviewToOfferRate = interviewCount > 0 ? Math.round((offerCount / interviewCount) * 100) : 0;

  // Skill progress data (fake percentages for demo)
  const skillsSource = parsedSkills.length > 0 ? parsedSkills : studentProfile.skills;
  const skillProgresses = skillsSource.map((skill, idx) => ({
    skill,
    progress: 60 + (idx * 15) // 60%, 75%, 90%, 105% (capped at 100)
  }));

  // Insights based on data
  const generateInsights = () => {
    const insights = [];

    if (interviewCount === 0 && appliedCount > 0) {
      insights.push("Keep applying! Your profile is being reviewed by companies.");
    } else if (appliedToInterviewRate > 30) {
      insights.push("Great! Your interview conversion rate is above average. Keep it up!");
    } else if (appliedToInterviewRate > 0) {
      insights.push("Your interview conversion rate is good. Focus on interview preparation.");
    }

    if (offerCount > 0) {
      insights.push(`Congratulations! You have ${offerCount} offer(s). Review them carefully.`);
    } else if (interviewCount > 0) {
      insights.push("You have active interviews. Practice common DSA and system design problems.");
    }

    if (skillsSource.length < 5) {
      insights.push("Consider adding more skills to your profile to increase job matches.");
    } else {
      insights.push("Your skill set is diverse. Deepen expertise in your top 2-3 skills.");
    }

    return insights;
  };

  const insights = generateInsights();

  return (
    <DashboardLayout>
      <h2 style={{ margin: 0 }}>Analytics & Progress</h2>
      <p style={{ color: 'var(--text-muted)', marginTop: '8px', marginBottom: '24px' }}>
        Track your placement journey metrics and skill progression
      </p>

      {loading ? (
        <div style={{ color: 'var(--text-muted)' }}>Loading analytics...</div>
      ) : (
        <>
          {usedMockData && (
            <div style={{
              padding: '12px 16px',
              borderRadius: '8px',
              background: 'rgba(59, 130, 246, 0.1)',
              color: '#2563eb',
              marginBottom: '16px',
              fontSize: '13px'
            }}>
              💡 Showing cached data - backend may be offline
            </div>
          )}

          {/* Overview Cards Section */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '32px'
          }}>
            <StatCard title="Applications" value={stats.applications} icon="📝" />
            <StatCard title="Interviews" value={stats.interviews} icon="💬" />
            <StatCard title="Offers" value={stats.offers} icon="🎉" />
            <StatCard title="Profile Status" value={`${stats.profileCompletion}%`} progress={stats.profileCompletion} />
          </div>

          {/* Application Funnel Section */}
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
          margin: '0 0 24px 0',
          color: 'var(--text-dark)'
        }}>
          Application Funnel
        </h3>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '16px'
        }}>
          {/* Applied Stage */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{
              background: 'rgba(59, 130, 246, 0.2)',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '12px'
            }}>
              <div style={{
                height: '120px',
                width: '100%',
                background: 'linear-gradient(to top, #3b82f6, rgba(59, 130, 246, 0.5))',
                borderRadius: '6px',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center'
              }}>
                <span style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#fff',
                  textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  marginBottom: '8px'
                }}>
                  {appliedCount}
                </span>
              </div>
            </div>
            <p style={{
              fontSize: '14px',
              fontWeight: '600',
              color: 'var(--text-dark)',
              margin: 0
            }}>
              Applied
            </p>
          </div>

          {/* Arrow */}
          <div style={{
            fontSize: '24px',
            color: 'var(--text-muted)',
            marginBottom: '50px'
          }}>
            →
          </div>

          {/* Interview Stage */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{
              background: 'rgba(249, 115, 22, 0.2)',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '12px'
            }}>
              <div style={{
                height: Math.max(60, (interviewCount / appliedCount) * 120 || 0),
                width: '100%',
                background: 'linear-gradient(to top, #f97316, rgba(249, 115, 22, 0.5))',
                borderRadius: '6px',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center'
              }}>
                {interviewCount > 0 && (
                  <span style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#fff',
                    textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    marginBottom: '8px'
                  }}>
                    {interviewCount}
                  </span>
                )}
              </div>
            </div>
            <p style={{
              fontSize: '14px',
              fontWeight: '600',
              color: 'var(--text-dark)',
              margin: '0 0 4px 0'
            }}>
              Interview
            </p>
            <p style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
              margin: 0
            }}>
              {appliedToInterviewRate}% conversion
            </p>
          </div>

          {/* Arrow */}
          <div style={{
            fontSize: '24px',
            color: 'var(--text-muted)',
            marginBottom: '50px'
          }}>
            →
          </div>

          {/* Offer Stage */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{
              background: 'rgba(34, 197, 94, 0.2)',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '12px'
            }}>
              <div style={{
                height: Math.max(40, (offerCount / appliedCount) * 120 || 0),
                width: '100%',
                background: 'linear-gradient(to top, #22c55e, rgba(34, 197, 94, 0.5))',
                borderRadius: '6px',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center'
              }}>
                {offerCount > 0 && (
                  <span style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#fff',
                    textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    marginBottom: '8px'
                  }}>
                    {offerCount}
                  </span>
                )}
              </div>
            </div>
            <p style={{
              fontSize: '14px',
              fontWeight: '600',
              color: 'var(--text-dark)',
              margin: '0 0 4px 0'
            }}>
              Offer
            </p>
            <p style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
              margin: 0
            }}>
              {interviewToOfferRate}% conversion
            </p>
          </div>
        </div>
      </div>

      {/* Skill Progress Section */}
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
          Skill Proficiency
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {skillProgresses.map((item, idx) => (
            <div key={idx}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px'
              }}>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--text-dark)',
                  margin: 0
                }}>
                  {item.skill}
                </p>
                <p style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'var(--primary, #6a6ff5)',
                  margin: 0
                }}>
                  {Math.min(100, item.progress)}%
                </p>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                background: 'rgba(0, 0, 0, 0.06)',
                borderRadius: '999px',
                overflow: 'hidden'
              }}>
                <div
                  style={{
                    width: `${Math.min(100, item.progress)}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--primary, #6a6ff5), var(--primary-dark, #7a5cf0))',
                    borderRadius: '999px',
                    transition: 'width 0.3s ease'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights Section */}
      <div style={{
        padding: '24px',
        borderRadius: '12px',
        background: 'var(--card-bg)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: '700',
          margin: '0 0 16px 0',
          color: 'var(--text-dark)'
        }}>
          💡 Insights & Recommendations
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {insights.map((insight, idx) => (
            <div
              key={idx}
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'rgba(106, 111, 245, 0.08)',
                borderLeft: '4px solid var(--primary, #6a6ff5)',
                fontSize: '14px',
                color: 'var(--text-dark)',
                lineHeight: '1.5'
              }}
            >
              {insight}
            </div>
          ))}
        </div>
      </div>
        </>
      )}
    </DashboardLayout>
  );
}

export default StudentAnalytics;
