import { Moon, Sun } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { Brand } from './Brand.jsx';

export function PublicNav({ theme, toggleTheme }) {
  return (
    <header className="public-nav">
      <div className="nav-inner">
        <Brand />
        <nav className="nav-links" aria-label="Main navigation">
          <a href="/#how">How it works</a>
          <NavLink to="/worker">Worker dashboard</NavLink>
          <NavLink to="/client">Client portal</NavLink>
          <a href="/#pricing">Pricing</a>
        </nav>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" aria-pressed={theme === 'dark'}>
            <span className="thumb">{theme === 'dark' ? <Moon /> : <Sun />}</span>
          </button>
          <Link to="/signup" className="btn btn-primary btn-sm">Get Started</Link>
        </div>
      </div>
    </header>
  );
}
