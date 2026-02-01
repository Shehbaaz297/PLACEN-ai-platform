
// Update the StudentDashboard to use StatCard with icons and progress.
// Applications, Interviews, Offers use icons.
// Profile Status should use progress={85}.


function StatCard({ title, value, icon, progress }) {
  return (
    <div
      style={{
        padding: '16px',
        borderRadius: '12px',
        background: 'var(--card-bg)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        minWidth: '180px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }}
    >
      {icon ? (
        <div
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            background: 'var(--card-icon-bg, rgba(0,0,0,0.06))',
            color: 'var(--accent, #3b82f6)'
          }}
        >
          {icon}
        </div>
      ) : null}
      <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>
        {title}
      </p>
      <h2 style={{ fontSize: '28px', fontWeight: 700, margin: 0 }}>
        {value}
      </h2>
      {typeof progress === 'number' ? (
        <div
          style={{
            marginTop: '8px',
            height: '6px',
            borderRadius: '999px',
            background: 'var(--progress-track, rgba(0,0,0,0.08))',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              width: `${Math.max(0, Math.min(100, progress))}%`,
              height: '100%',
              background: 'var(--progress-fill, var(--accent, #3b82f6))'
            }}
          />
        </div>
      ) : null}
    </div>
  );
}


export default StatCard;
