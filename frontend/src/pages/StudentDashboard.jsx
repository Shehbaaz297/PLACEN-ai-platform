import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';

function StudentDashboard() {
  return (
    <DashboardLayout>
      <h2 style={{ margin: 0 }}>Student Dashboard</h2>
      <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
        Track your placement journey
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        marginTop: '24px'
      }}>
        <StatCard title="Applications" value="12" icon="📝" />
        <StatCard title="Interviews" value="3" icon="💬" />
        <StatCard title="Offers" value="1" icon="🎉" />
        <StatCard title="Profile Status" value="85%" progress={85} />
      </div>
    </DashboardLayout>
  );
}

export default StudentDashboard;
