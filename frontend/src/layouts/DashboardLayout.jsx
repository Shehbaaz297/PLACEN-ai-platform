import Navbar from '../components/Navbar';

function DashboardLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '24px' }}>
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;

