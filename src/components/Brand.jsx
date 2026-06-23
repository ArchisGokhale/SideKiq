import { Link } from 'react-router-dom';

export function Brand({ to = '/' }) {
  return (
    <Link className="logo" to={to} aria-label="SideKiq home">
      <span className="side">Side</span><span className="kiq">Kiq</span>
    </Link>
  );
}
