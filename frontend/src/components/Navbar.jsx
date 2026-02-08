import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../utils/auth';

function Navbar() {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Capitalize role for display
  const roleDisplay = currentUser?.role 
    ? currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1)
    : 'Guest';

  return (
    <div style={{
      height: '64px',
      background: 'linear-gradient(90deg, #6a6ff5, #7a5cf0)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ 
        margin: 0,
        fontSize: '22px',
        fontWeight: '700',
        letterSpacing: '0.5px'
      }}>
        PlaCEN
      </h3>
      
      {currentUser && (
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '20px' 
        }}>
          {/* User Info */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'flex-end'
          }}>
            <span style={{ 
              fontSize: '14px', 
              fontWeight: '600',
              marginBottom: '2px'
            }}>
              {currentUser.name}
            </span>
            <span style={{ 
              fontSize: '12px',
              opacity: 0.9,
              fontWeight: '500'
            }}>
              {roleDisplay}
            </span>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            style={{
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#fff',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.3)';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
