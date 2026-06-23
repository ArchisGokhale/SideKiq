import { LogOut, Moon, Sun } from 'lucide-react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Brand } from './Brand.jsx';
import { nav } from '../data/sidekiqData.js';

const titles = {
  '/worker': ['Worker dashboard', 'Premium task flow, live opportunities, and payout clarity.'],
  '/worker/opportunities': ['Opportunity marketplace', 'Find high-fit tasks and act while intent is hot.'],
  '/worker/tasks': ['Active tasks', 'Track milestones, notes, workspace activity, and delivery health.'],
  '/worker/messages': ['Messages', 'Keep task communication tied to real project context.'],
  '/worker/earnings': ['Earnings', 'Understand income, payouts, methods, and category mix.'],
  '/worker/profile': ['Public developer profile', 'Show proof, availability, reviews, and portfolio depth.'],
  '/worker/settings': ['Worker settings', 'Tune availability, notifications, verification, and payout details.'],
  '/client': ['Client dashboard', 'Post work, review matches, manage active tasks, and release payments.'],
  '/client/post-task': ['Post a task', 'Turn a messy request into a clear brief builders can act on.'],
  '/client/matches': ['Builder matches', 'Compare trusted SideKiq workers without proposal overload.'],
  '/client/workspace': ['Client workspace', 'Review progress, files, messages, and approvals in one place.'],
  '/client/payments': ['Payments', 'Manage escrow, UPI, Razorpay, receipts, and release requests.'],
  '/client/settings': ['Client settings', 'Company profile, notifications, billing, and team preferences.']
};

export function AppLayout({ role, theme, toggleTheme }) {
  const location = useLocation();
  const current = titles[location.pathname] || titles[`/${role}`];
  const roleNav = nav[role];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Brand to={`/${role}`} />
        <div className="role-pill">{role === 'worker' ? 'Worker portal' : 'Client portal'}</div>
        <nav className="side-nav" aria-label={`${role} navigation`}>
          {roleNav.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === `/${role}`}>
              <item.icon />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-card">
          <strong>{role === 'worker' ? 'Priority mode' : 'Fast match mode'}</strong>
          <p>{role === 'worker' ? 'You are visible for urgent tasks under 24 hours.' : 'Matching is tuned for verified, responsive builders.'}</p>
        </div>
      </aside>
      <div className="app-main">
        <header className="app-topbar">
          <div>
            <span className="eyebrow compact">{role === 'worker' ? 'SideKiq builder' : 'SideKiq client'}</span>
            <h1>{current[0]}</h1>
            <p>{current[1]}</p>
          </div>
          <div className="topbar-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" aria-pressed={theme === 'dark'}>
              <span className="thumb">{theme === 'dark' ? <Moon /> : <Sun />}</span>
            </button>
            <NavLink to={role === 'worker' ? '/client' : '/worker'} className="btn btn-ghost btn-sm">
              Switch to {role === 'worker' ? 'client' : 'worker'}
            </NavLink>
            <NavLink to="/" className="icon-btn" aria-label="Back to landing"><LogOut /></NavLink>
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
