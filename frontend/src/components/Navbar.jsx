function Navbar() {
  return (
    <div style={{
      height: '64px',
      background: 'linear-gradient(90deg, #6a6ff5, #7a5cf0)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px'
    }}>
      <h3>PlaCEN</h3>
      <div>Welcome, Student</div>
    </div>
  );
}

export default Navbar;
