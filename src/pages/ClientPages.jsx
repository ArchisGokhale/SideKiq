import { Link } from 'react-router-dom';
import { CheckCircle2, CreditCard, FileText, Send, Sparkles, Star } from 'lucide-react';
import { activeTask, clientProjects, messages, workers } from '../data/sidekiqData.js';
import { Card, PageGrid, Progress, StatCard, StatusBadge } from '../components/UI.jsx';

const clientStats = [
  { label: 'Tasks in motion', value: '3', hint: '1 needs review', icon: FileText },
  { label: 'Matched builders', value: '12', hint: '3 priority', icon: Sparkles },
  { label: 'Escrow balance', value: '$1.3k', hint: '2 active tasks', icon: CreditCard },
  { label: 'Avg rating given', value: '4.9', hint: 'Healthy workspace', icon: Star }
];

export function ClientDashboard() {
  return (
    <PageGrid>
      <div className="stats-row">{clientStats.map((s) => <StatCard key={s.label} {...s} />)}</div>
      <Card className="wide">
        <div className="section-line"><div><h2>Current projects</h2><p>Every project links into matching, workspace, or payments.</p></div><Link className="btn btn-primary btn-sm" to="/client/post-task">Post task</Link></div>
        <div className="table-list">{clientProjects.map((p) => <Link className="list-item" to="/client/workspace" key={p.title}><div><strong>{p.title}</strong><p>{p.owner} · due {p.due}</p></div><span>{p.budget}</span><StatusBadge tone={p.status === 'Paid' ? 'good' : 'neutral'}>{p.status}</StatusBadge></Link>)}</div>
      </Card>
      <Card><h2>Next best action</h2><p>Review Aarav’s latest deliverable and release the final UPI payment when approved.</p><Link className="btn btn-primary full" to="/client/payments">Review payment</Link></Card>
    </PageGrid>
  );
}

export function PostTask() {
  return (
    <PageGrid>
      <Card className="wide">
        <h2>Post a task</h2>
        <div className="form-grid"><input defaultValue="Launch page polish for AI waitlist" /><select defaultValue="Web builds"><option>Web builds</option><option>AI workflows</option><option>Automation</option></select><input defaultValue="$650" /><select defaultValue="Tomorrow"><option>Today</option><option>Tomorrow</option><option>This week</option></select></div>
        <textarea defaultValue="We need a premium pass on hero, pricing, responsive details, and analytics before launch." />
        <Link className="btn btn-primary" to="/client/matches">Find builders</Link>
      </Card>
      <Card><h2>Brief quality</h2><Progress value={86} /><p>Strong scope, clear budget, and practical deadline.</p></Card>
    </PageGrid>
  );
}

export function ClientMatches() {
  return (
    <PageGrid>
      <Card className="wide">
        <div className="section-line"><h2>Recommended builders</h2><StatusBadge tone="good">3 priority matches</StatusBadge></div>
        <div className="worker-grid">{workers.map((w) => <article className="worker-card" key={w.name}><div className="avatar-md">{w.name.split(' ').map((n) => n[0]).join('')}</div><h3>{w.name}</h3><p>{w.title}</p><div className="chip-row">{w.tags.map((t) => <span key={t}>{t}</span>)}</div><div className="section-line"><strong>{w.match}% match</strong><span>{w.rate}</span></div><Link className="btn btn-primary full" to="/client/workspace">Invite</Link></article>)}</div>
      </Card>
    </PageGrid>
  );
}

export function ClientWorkspace() {
  return (
    <PageGrid>
      <Card className="wide workspace-card">
        <div className="section-line"><div><h2>{activeTask.title}</h2><p>Aarav Mehta · Room {activeTask.room}</p></div><StatusBadge tone="good">{activeTask.progress}% complete</StatusBadge></div>
        <Progress value={activeTask.progress} />
        <div className="kanban-row">{activeTask.milestones.map((m, i) => <article key={m} className={i < 2 ? 'done' : ''}><CheckCircle2 /><strong>{m}</strong><span>{i < 2 ? 'Done' : 'Next'}</span></article>)}</div>
      </Card>
      <Card><h2>Chat</h2><div className="message-list">{messages.map((m) => <article className={m.from !== 'You' ? 'mine' : ''} key={`${m.from}-${m.time}`}><strong>{m.from === 'You' ? 'Aarav Mehta' : m.from}</strong><p>{m.text}</p><span>{m.time}</span></article>)}</div><div className="composer"><input placeholder="Send feedback..." /><button className="icon-btn"><Send /></button></div></Card>
      <Card><h2>Approval</h2><p>Two deliverables are ready for final review.</p><Link className="btn btn-primary full" to="/client/payments">Approve and pay</Link></Card>
    </PageGrid>
  );
}

export function ClientPayments() {
  return (
    <PageGrid>
      <Card className="wide"><CreditCard className="big-icon" /><h2>Release payment</h2><p>Simulated UPI/Razorpay payment for Bright Desk and Aarav Mehta. No live keys are used.</p><div className="detail-grid"><div className="metric"><span>Escrow</span><strong>$420</strong></div><div className="metric"><span>Method</span><strong>UPI primary</strong></div><div className="metric"><span>Receipt</span><strong>PAY-2841</strong></div></div><Link className="btn btn-primary" to="/worker/payment-received">Release payment</Link></Card>
    </PageGrid>
  );
}

export function ClientSettings() {
  return <PageGrid><Card className="wide"><h2>Company settings</h2><div className="settings-list"><label><span>Fast matching enabled</span><input type="checkbox" defaultChecked /></label><label><span>Razorpay invoices</span><input type="checkbox" defaultChecked /></label><label><span>Workspace email summaries</span><input type="checkbox" defaultChecked /></label></div></Card></PageGrid>;
}
