// Create a StudentProfile page for a placement portal.
// Sections:
// 1. Personal Information (Name, Email, Phone, College, Branch)
// 2. Academic Details (CGPA, 10th %, 12th %)
// 3. Skills (displayed as tags/chips)
// 4. Resume section with upload button (UI only).
// Design: clean card-based layout, two-column on desktop,
// single-column on mobile, subtle shadows.
// No form submission logic yet.
import React from 'react';  
// complete the code as comment suggested above 




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

