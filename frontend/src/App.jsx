import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';
import StudentProfile from './pages/StudentProfile';
import DashboardLayout from './layouts/DashboardLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route
          path="/student/profile"
          element={(
            <DashboardLayout>
              <StudentProfile />
            </DashboardLayout>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
