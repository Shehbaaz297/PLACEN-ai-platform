import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function DashboardLayout({ children }) {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ padding: '24px', flex: 1, overflowY: 'auto' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
// Adjust StudentDashboard layout spacing to fit sidebar layout.
// Ensure stat cards wrap properly on smaller screens.
// Keep heading and stat cards inside the main content area.



export default DashboardLayout;

