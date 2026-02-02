
import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import { companyStats } from '../utils/mockData';

function CompanyDashBoard() {
	return (
		<DashboardLayout>
			<h2 style={{ margin: 0 }}>Company Dashboard</h2>
			<p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
				Overview of your hiring activity
			</p>

			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '16px',
					marginTop: '24px'
				}}
			>
				<StatCard title="Jobs Posted" value={companyStats.jobsPosted} icon="📣" />
				<StatCard title="Applications Received" value={companyStats.applicationsReceived} icon="📥" />
				<StatCard title="Shortlisted Candidates" value={companyStats.shortlisted} icon="✅" />
				<StatCard title="Interviews Scheduled" value={companyStats.interviews} icon="🗓️" />
			</div>
		</DashboardLayout>
	);
}

export default CompanyDashBoard;
