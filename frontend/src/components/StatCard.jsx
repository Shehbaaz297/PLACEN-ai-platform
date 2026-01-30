function StatCard({ title, value }) {
  return (
    <div
      style={{
        padding: '16px',
        borderRadius: '12px',
        background: 'var(--card-bg)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        minWidth: '180px'
      }}
    >
      <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>
        {title}
      </p>
      <h2>{value}</h2>
    </div>
  );
}

export default StatCard;
