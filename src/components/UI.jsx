export function Card({ className = '', children }) {
  return <section className={`card ${className}`}>{children}</section>;
}

export function StatCard({ icon: Icon, label, value, hint }) {
  return (
    <Card className="stat-card">
      <div className="stat-icon"><Icon /></div>
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{hint}</p>
    </Card>
  );
}

export function StatusBadge({ children, tone = 'neutral' }) {
  return <span className={`status ${tone}`}>{children}</span>;
}

export function PageGrid({ children, className = '' }) {
  return <main className={`page-grid ${className}`}>{children}</main>;
}

export function Progress({ value }) {
  return <span className="progress"><i style={{ width: `${value}%` }} /></span>;
}
