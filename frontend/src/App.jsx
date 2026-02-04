import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';
import StudentProfile from './pages/StudentProfile';
import StudentJobs from './pages/StudentJobs';
import CompanyDashBoard from './pages/CompanyDashBoard';
import Postjob from './pages/Postjob';
import DashboardLayout from './layouts/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/student/dashboard"
          element={(
            <ProtectedRoute allowedRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/student/profile"
          element={(
            <ProtectedRoute allowedRole="student">
              <DashboardLayout>
                <StudentProfile />
              </DashboardLayout>
            </ProtectedRoute>
          )}
        />
        <Route
          path="/student/jobs"
          element={(
            <ProtectedRoute allowedRole="student">
              <StudentJobs />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/company/dashboard"
          element={(
            <ProtectedRoute allowedRole="company">
              <CompanyDashBoard />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/company/post-job"
          element={(
            <ProtectedRoute allowedRole="company">
              <Postjob />
            </ProtectedRoute>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
