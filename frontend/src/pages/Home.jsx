import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../utils/auth';

function Home() {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  useEffect(() => {
    // If user is logged in, redirect to their dashboard
    if (currentUser) {
      const routes = {
        student: '/student/dashboard',
        company: '/company/dashboard',
        alumni: '/alumni/dashboard',
        tpo: '/tpo/dashboard'
      };
      navigate(routes[currentUser.role] || '/login');
    } else {
      // If not logged in, redirect to login
      navigate('/login');
    }
  }, [currentUser, navigate]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg, #f5f7fb)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ margin: 0, marginBottom: '8px' }}>Welcome to PlaCEN</h2>
        <p style={{ color: 'var(--text-muted)', margin: 0 }}>Redirecting...</p>
      </div>
    </div>
  );
}

export default Home;
