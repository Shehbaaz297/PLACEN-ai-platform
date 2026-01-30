import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';

function StudentDashboard() {
  return (
    <DashboardLayout>
      <h2>Student Dashboard</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        Track your placement journey
      </p>

      <div style={{
        display: 'flex',
        gap: '16px',
        marginTop: '24px'
      }}>
        <StatCard title="Applications" value="12" />
        <StatCard title="Interviews" value="3" />
        <StatCard title="Offers" value="1" />
        <StatCard title="Profile Status" value="85%" />
      </div>
    </DashboardLayout>
  );
}

export default StudentDashboard;
