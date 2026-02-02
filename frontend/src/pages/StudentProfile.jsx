import { studentProfile } from '../utils/mockData';

const sectionStyle = {
  background: 'var(--card-bg, #fff)',
  borderRadius: '12px',
  padding: '16px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
};

const labelStyle = {
  fontSize: '13px',
  color: 'var(--text-muted, #6b7280)',
  marginBottom: '4px'
};

const valueStyle = {
  fontSize: '15px',
  fontWeight: 600,
  margin: 0
};

const chipStyle = {
  padding: '6px 10px',
  borderRadius: '999px',
  background: 'var(--chip-bg, rgba(59,130,246,0.12))',
  color: 'var(--accent, #3b82f6)',
  fontSize: '12px',
  fontWeight: 600
};

function StudentProfile() {
  return (
    <div>
      <h2 style={{ margin: 0 }}>Student Profile</h2>
      <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
        Manage your academic and personal details
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          marginTop: '24px'
        }}
      >
        <div style={sectionStyle}>
          <h3 style={{ marginTop: 0 }}>Personal Information</h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div>
              <p style={labelStyle}>Name</p>
              <p style={valueStyle}>{studentProfile.name}</p>
            </div>
            <div>
              <p style={labelStyle}>Email</p>
              <p style={valueStyle}>{studentProfile.email}</p>
            </div>
            <div>
              <p style={labelStyle}>College</p>
              <p style={valueStyle}>{studentProfile.college}</p>
            </div>
            <div>
              <p style={labelStyle}>Branch</p>
              <p style={valueStyle}>{studentProfile.branch}</p>
            </div>
          </div>
        </div>

        <div style={sectionStyle}>
          <h3 style={{ marginTop: 0 }}>Academic Details</h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div>
              <p style={labelStyle}>CGPA</p>
              <p style={valueStyle}>{studentProfile.cgpa}</p>
            </div>
          </div>
        </div>

        <div style={sectionStyle}>
          <h3 style={{ marginTop: 0 }}>Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {studentProfile.skills.map((skill) => (
              <span key={skill} style={chipStyle}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div style={sectionStyle}>
          <h3 style={{ marginTop: 0 }}>Resume</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: 0 }}>
            Upload your latest resume for recruiters.
          </p>
          <button
            type="button"
            style={{
              marginTop: '8px',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid rgba(0,0,0,0.08)',
              background: 'var(--accent, #3b82f6)',
              color: '#fff',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Upload Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
