import { Link, useParams } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ArrowRight, CheckCircle2, Clock3, FileUp, MessageSquareText, Send, Sparkles, Star, WalletCards } from 'lucide-react';
import { activeTask, categories, earnings, messages, stats, tasks, timeline, transactions } from '../data/sidekiqData.js';
import { Card, PageGrid, Progress, StatCard, StatusBadge } from '../components/UI.jsx';

export function WorkerDashboard() {
  return (
    <PageGrid>
      <div className="stats-row">{stats.map((s) => <StatCard key={s.label} {...s} />)}</div>
      <Card className="wide">
        <div className="section-line"><div><h2>Live opportunity feed</h2><p>Sorted by urgency, fit, budget, and response freshness.</p></div><Link className="btn btn-ghost btn-sm" to="/worker/opportunities">View all</Link></div>
        <div className="table-list">{tasks.slice(0, 3).map((task) => <TaskListItem task={task} key={task.id} />)}</div>
      </Card>
      <Card>
        <div className="section-line"><h2>Activity timeline</h2></div>
        <div className="timeline">{timeline.map(({ icon: Icon, title, detail, time }) => <article key={title}><Icon /><div><strong>{title}</strong><p>{detail}</p></div><span>{time}</span></article>)}</div>
      </Card>
      <Card>
        <div className="section-line"><h2>Availability</h2><StatusBadge tone="good">Online</StatusBadge></div>
        <p className="large-number">18m</p>
        <p>Average response while priority mode is active.</p>
        <Link to="/worker/settings" className="btn btn-primary full">Tune availability</Link>
      </Card>
    </PageGrid>
  );
}

export function Opportunities() {
  return (
    <PageGrid>
      <Card className="wide">
        <div className="toolbar"><input placeholder="Search tasks, clients, categories..." /><select><option>All urgency</option><option>High</option><option>Medium</option></select><select><option>Best match</option><option>Budget high</option></select></div>
        <div className="table-list">{tasks.map((task) => <TaskListItem task={task} key={task.id} />)}</div>
      </Card>
      <Card>
        <Clock3 className="big-icon" />
        <h2>Countdown opportunity</h2>
        <p className="countdown">14:32</p>
        <p>Loopline needs launch-page help before their campaign window opens.</p>
        <div className="button-row"><Link to="/worker/opportunities/T-1049" className="btn btn-primary">Interested</Link><button className="btn btn-ghost">Decline</button></div>
      </Card>
    </PageGrid>
  );
}

export function OpportunityDetail() {
  const { id } = useParams();
  const task = tasks.find((item) => item.id === id) || tasks[0];
  return (
    <PageGrid>
      <Card className="wide">
        <StatusBadge tone="hot">{task.match}% match</StatusBadge>
        <h2>{task.title}</h2>
        <p>{task.summary}</p>
        <div className="detail-grid">
          <Metric label="Client" value={task.client} />
          <Metric label="Budget" value={task.budget} />
          <Metric label="Due" value={task.due} />
          <Metric label="Urgency" value={task.urgency} />
        </div>
        <h3>Milestones</h3>
        <div className="check-list">{task.milestones.map((m) => <span key={m}><CheckCircle2 /> {m}</span>)}</div>
      </Card>
      <Card>
        <h2>Proposal</h2>
        <textarea placeholder="Write a concise proposal..." defaultValue={`I can deliver ${task.title.toLowerCase()} with a first review inside ${task.eta}.`} />
        <input defaultValue={task.budget.replace('$', '')} aria-label="Proposal amount" />
        <Link to="/worker/selected" className="btn btn-primary full">Send proposal</Link>
      </Card>
    </PageGrid>
  );
}

export function SelectedSuccess() {
  return (
    <main className="success-screen">
      <div className="success-medal"><CheckCircle2 /></div>
      <h1>You are selected for the workspace.</h1>
      <p>Bright Desk accepted your proposal. The task room, chat, milestones, files, and payment request are ready.</p>
      <Link to="/worker/tasks" className="btn btn-primary">Open workspace <ArrowRight /></Link>
    </main>
  );
}

export function ActiveTasks() {
  return (
    <PageGrid>
      <Card className="wide workspace-card">
        <div className="section-line"><div><h2>{activeTask.title}</h2><p>Room {activeTask.room} · {activeTask.client}</p></div><StatusBadge tone="good">{activeTask.progress}% complete</StatusBadge></div>
        <Progress value={activeTask.progress} />
        <div className="kanban-row">{activeTask.milestones.map((m, i) => <article key={m} className={i < 2 ? 'done' : ''}><CheckCircle2 /><strong>{m}</strong><span>{i < 2 ? 'Done' : 'Next'}</span></article>)}</div>
      </Card>
      <Card><h2>Workspace chat</h2><MessageList /><div className="composer"><input placeholder="Type update..." /><button className="icon-btn"><Send /></button></div></Card>
      <Card><h2>Deliverables</h2><div className="file-list">{activeTask.deliverables.map((file) => <span key={file}><FileUp /> {file}</span>)}</div><Link className="btn btn-primary full" to="/worker/payment-request">Request payment</Link></Card>
      <Card className="wide"><h2>Task notes</h2><div className="note-grid">{activeTask.notes.map((note) => <article key={note}>{note}</article>)}</div></Card>
    </PageGrid>
  );
}

export function MessagesPage() {
  return <PageGrid><Card className="wide"><h2>Bright Desk conversation</h2><MessageList /><div className="composer"><input placeholder="Reply with context..." /><button className="icon-btn"><Send /></button></div></Card><Card><h2>Linked task</h2><p>{activeTask.summary}</p><Progress value={activeTask.progress} /></Card></PageGrid>;
}

export function PaymentRequest() {
  return (
    <PageGrid>
      <Card className="wide"><WalletCards className="big-icon" /><h2>Request final payment</h2><p>Simulated payment request for {activeTask.client}. Method defaults to UPI with Razorpay as card/netbanking fallback.</p><div className="payment-methods"><label><input type="radio" name="method" defaultChecked /> UPI instant settlement</label><label><input type="radio" name="method" /> Razorpay invoice link</label><label><input type="radio" name="method" /> Escrow release request</label></div><div className="detail-grid"><Metric label="Amount" value={activeTask.budget} /><Metric label="Method" value="UPI / Razorpay" /><Metric label="Receipt" value="Auto-generated" /></div><Link className="btn btn-primary" to="/worker/payment-received">Send request</Link></Card>
    </PageGrid>
  );
}

export function PaymentReceived() {
  return <main className="success-screen"><div className="success-medal"><WalletCards /></div><h1>Payment received.</h1><p>Transaction PAY-2841 was marked paid through simulated UPI settlement.</p><Link to="/worker/rating" className="btn btn-primary">Rate client</Link></main>;
}

export function RatingPage() {
  return (
    <PageGrid><Card className="wide"><h2>Rate this client</h2><div className="rating-grid">{['Scope clarity', 'Feedback speed', 'Payment trust', 'Communication'].map((label) => <article key={label}><strong>{label}</strong><div className="stars-row">{Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}</div></article>)}</div><div className="chip-row"><span>Clear scope</span><span>Fast feedback</span><span>Paid promptly</span></div><textarea placeholder="Add a short note..." /><Link to="/worker/earnings" className="btn btn-primary">Submit rating</Link></Card></PageGrid>
  );
}

export function EarningsPage() {
  return (
    <PageGrid>
      <Card className="wide chart-card"><h2>Earnings trend</h2><ResponsiveContainer width="100%" height={260}><AreaChart data={earnings}><defs><linearGradient id="earningFill" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#5B3FD6" stopOpacity={0.45}/><stop offset="95%" stopColor="#5B3FD6" stopOpacity={0}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" stroke="var(--border)" /><XAxis dataKey="month" /><YAxis /><Tooltip /><Area type="monotone" dataKey="value" stroke="#5B3FD6" fill="url(#earningFill)" strokeWidth={3} /></AreaChart></ResponsiveContainer></Card>
      <Card><h2>Transactions</h2><div className="mini-table">{transactions.map((t) => <article key={t.id}><strong>{t.title}</strong><span>{t.amount}</span><p>{t.status} · {t.method}</p></article>)}</div></Card>
      <Card><h2>Category breakdown</h2><div className="category-breakdown">{categories.map((c, index) => <article key={c.label}><span>{c.label}</span><Progress value={[36, 28, 22, 14][index]} /></article>)}</div></Card>
    </PageGrid>
  );
}

export function ProfilePage() {
  return (
    <PageGrid>
      <Card className="wide profile-hero"><div className="avatar-xl">AM</div><div><StatusBadge tone="good">Verified priority builder</StatusBadge><h2>Aarav Mehta</h2><p>Automation builder for founder ops, finance workflows, and launch-critical tooling.</p><div className="chip-row"><span>n8n</span><span>React</span><span>APIs</span><span>Sheets</span></div></div></Card>
      <Card><h2>Trust</h2><p className="large-number">4.98</p><p>Average rating across 42 completed tasks.</p></Card>
      <Card><h2>Portfolio</h2><div className="mini-table"><article><strong>Refund automation</strong><p>Saved 9 hours per week.</p></article><article><strong>Support evaluator</strong><p>Scored 1,200 replies.</p></article></div></Card>
    </PageGrid>
  );
}

export function WorkerSettings() {
  return <PageGrid><Card className="wide"><h2>Settings</h2><div className="settings-list"><label><span>Available for urgent tasks</span><input type="checkbox" defaultChecked /></label><label><span>Push notifications</span><input type="checkbox" defaultChecked /></label><label><span>UPI payout enabled</span><input type="checkbox" defaultChecked /></label></div></Card></PageGrid>;
}

function TaskListItem({ task }) {
  return <Link to={`/worker/opportunities/${task.id}`} className="list-item"><div><strong>{task.title}</strong><p>{task.client} · {task.category} · due {task.due}</p></div><span>{task.budget}</span><StatusBadge tone={task.urgency === 'High' ? 'hot' : 'neutral'}>{task.match}%</StatusBadge></Link>;
}

function Metric({ label, value }) {
  return <div className="metric"><span>{label}</span><strong>{value}</strong></div>;
}

function MessageList() {
  return <div className="message-list">{messages.map((m) => <article className={m.from === 'You' ? 'mine' : ''} key={`${m.from}-${m.time}`}><strong>{m.from}</strong><p>{m.text}</p><span>{m.time}</span></article>)}</div>;
}
