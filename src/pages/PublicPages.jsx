import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Bot, CheckCircle2, Code2, CreditCard, Github, Mail, ShieldCheck, Sparkles, Star, Upload, UserRound, Wrench } from 'lucide-react';
import { categories } from '../data/sidekiqData.js';

export function LandingPage() {
  return (
    <>
      <section className="hero container" id="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">On-demand tech talent</span>
            <h1>Get tech work done by builders who move <em>fast</em>.</h1>
            <p className="hero-sub">SideKiq connects clients with verified builders for websites, automations, AI workflows, dashboards, bug fixes, and launch-critical polish.</p>
            <div className="hero-actions">
              <Link to="/signup" className="btn btn-primary">Start matching <ArrowRight /></Link>
              <Link to="/worker" className="btn btn-ghost">View dashboard</Link>
            </div>
            <div className="hero-meta">
              <div className="avatar-stack"><span>AM</span><span>NB</span><span>SR</span><span>+9</span></div>
              <p>Verified builders. Escrow-backed tasks. Clear workspaces from first brief to final rating.</p>
            </div>
          </div>
          <div className="premium-board" aria-label="SideKiq task preview">
            <div className="board-top"><span>Live opportunities</span><strong>14 matches</strong></div>
            {[
              ['AI workflow', '$780', Bot, '94% match'],
              ['Landing page', '$650', Code2, '91% match'],
              ['Automation', '$420', Wrench, 'Accepted']
            ].map(([title, price, Icon, meta]) => (
              <div className="task-row" key={title}>
                <span className="task-dot"><Icon /></span>
                <div><strong>{title}</strong><p>{meta}</p></div>
                <b>{price}</b>
              </div>
            ))}
            <div className="board-metric">
              <span>Average first response</span>
              <strong>8 min</strong>
            </div>
          </div>
        </div>
      </section>
      <section className="container proof-strip">
        {['Northwind', 'Loopline', 'Civic Labs', 'Bright Desk', 'Ferro & Co'].map((name) => <span key={name}>{name}</span>)}
      </section>
      <section className="container section-pad" id="how">
        <div className="section-head">
          <span className="eyebrow">The flow</span>
          <h2>One connected journey for clients and workers.</h2>
          <p className="section-sub">Post a clear brief, get matched, work in a shared room, release payment, and keep reputation moving.</p>
        </div>
        <div className="feature-grid">
          {[
            ['Post', 'Clients shape a task with budget, urgency, files, and preferred payout method.'],
            ['Match', 'Workers see fit scores, countdowns, scope, and proposal context.'],
            ['Deliver', 'Both sides share messages, files, milestones, payment requests, and ratings.']
          ].map(([title, text], index) => <article className="feature-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
      <section className="container section-pad">
        <div className="section-head">
          <span className="eyebrow">Categories</span>
          <h2>Premium where speed actually matters.</h2>
        </div>
        <div className="category-grid">
          {categories.map(({ label, icon: Icon, tone }) => (
            <article className={`category-card ${tone}`} key={label}><Icon /><h3>{label}</h3><p>Scoped, priced, tracked, and finished inside SideKiq.</p></article>
          ))}
        </div>
      </section>
      <section className="container section-pad">
        <div className="section-head">
          <span className="eyebrow">Proof</span>
          <h2>Built for people who hate messy freelance portals.</h2>
        </div>
        <div className="feature-grid">
          {[
            ['Maya C.', 'We approved work, files, and payment from one room. No scattered DMs.'],
            ['Aarav M.', 'The task cards tell me budget, urgency, fit, and next action immediately.'],
            ['Theo R.', 'The flow feels premium without hiding the details I need to decide.']
          ].map(([name, quote]) => <article className="feature-card testimonial" key={name}><div className="stars-row small">{Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}</div><p>{quote}</p><strong>{name}</strong></article>)}
        </div>
      </section>
      <section className="container section-pad">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Clear answers before anyone commits.</h2>
        </div>
        <div className="faq-list">
          {[
            ['Is payment real in this demo?', 'No. UPI/Razorpay states are simulated so the product journey is safe to test.'],
            ['Can both clients and workers use it?', 'Yes. The same task data connects client matching, worker opportunities, workspace, payments, and ratings.'],
            ['Does the dashboard use the landing style?', 'Yes. The dashboard keeps the SideKiq purple/orange identity, Inter typography, soft cards, and theme toggle.']
          ].map(([q, a]) => <article key={q}><strong>{q}</strong><p>{a}</p></article>)}
        </div>
      </section>
      <section className="container final-cta" id="pricing">
        <h2>Ready to make the flow real?</h2>
        <p>Use the same signup, then land in the portal that matches your role.</p>
        <Link to="/signup" className="btn btn-light">Create your SideKiq profile</Link>
      </section>
    </>
  );
}

export function SignupPage() {
  const navigate = useNavigate();
  return (
    <main className="signup-page">
      <section className="signup-panel">
        <span className="eyebrow">Join SideKiq</span>
        <h1>Start with a clean profile, not a cluttered portal.</h1>
        <p>Use social auth, email, or phone. This local prototype routes the account into the onboarding flow without a backend.</p>
        <div className="auth-grid">
          <button onClick={() => navigate('/onboarding/role')} className="choice-card"><Mail /><strong>Continue with email</strong><span>client@sidekiq.demo</span></button>
          <button onClick={() => navigate('/onboarding/role')} className="choice-card"><Github /><strong>Continue with GitHub</strong><span>Best for builders</span></button>
          <button onClick={() => navigate('/onboarding/role')} className="choice-card"><CreditCard /><strong>Continue with phone</strong><span>Best for payout alerts</span></button>
        </div>
      </section>
      <aside className="signup-aside">
        <div className="success-medal"><ShieldCheck /></div>
        <h2>Verified, escrow-backed, reputation-first.</h2>
        <ul>
          <li><CheckCircle2 /> Same theme and data across every route</li>
          <li><CheckCircle2 /> Realistic worker and client journeys</li>
          <li><CheckCircle2 /> Simulated UPI/Razorpay states</li>
          <li><Star /> Public profile and rating loop included</li>
        </ul>
      </aside>
    </main>
  );
}

export function RoleSelectionPage() {
  return (
    <OnboardingShell step="02" title="Choose how you want SideKiq to work for you." next="/onboarding/profile">
      <div className="choice-grid three">
        <Link to="/onboarding/profile" className="choice-card"><Sparkles /><strong>Worker</strong><span>Earn by picking up scoped tech tasks.</span></Link>
        <Link to="/client" className="choice-card"><CreditCard /><strong>Client</strong><span>Post tasks and approve work in one workspace.</span></Link>
        <Link to="/worker" className="choice-card"><UserRound /><strong>Both</strong><span>Switch between earning and hiring portals.</span></Link>
      </div>
    </OnboardingShell>
  );
}

export function ProfileSetupPage() {
  return (
    <OnboardingShell step="03" title="Set up the profile builders will trust." next="/onboarding/pricing">
      <div className="profile-upload"><Upload /><span>Upload profile photo</span></div>
      <div className="form-grid"><input defaultValue="Aarav Mehta" /><input defaultValue="Automation builder" /></div>
      <textarea defaultValue="I build clean automations, dashboards, and API workflows for fast-moving teams." />
      <div className="chip-row">{['React', 'n8n', 'AI workflows', 'APIs', 'Sheets', 'Dashboards'].map((chip) => <span key={chip}>{chip}</span>)}</div>
    </OnboardingShell>
  );
}

export function PricingAvailabilityPage() {
  return (
    <OnboardingShell step="04" title="Set pricing, availability, and task preferences." next="/onboarding/portfolio">
      <div className="form-grid"><input defaultValue="$45/hr" /><select defaultValue="urgent"><option value="urgent">Urgent tasks under 24h</option><option>Weekend work</option><option>Longer builds</option></select></div>
      <div className="settings-list"><label><span>Available today</span><input type="checkbox" defaultChecked /></label><label><span>Accept fixed-budget tasks</span><input type="checkbox" defaultChecked /></label><label><span>UPI payout preferred</span><input type="checkbox" defaultChecked /></label></div>
    </OnboardingShell>
  );
}

export function PortfolioVerificationPage() {
  return (
    <OnboardingShell step="05" title="Add proof and finish verification." next="/onboarding/success">
      <div className="form-grid"><input defaultValue="https://portfolio.sidekiq.demo/aarav" /><input defaultValue="github.com/aarav-demo" /></div>
      <div className="settings-list"><label><span>Email verified</span><input type="checkbox" defaultChecked /></label><label><span>Phone verified</span><input type="checkbox" defaultChecked /></label><label><span>Portfolio reviewed</span><input type="checkbox" defaultChecked /></label></div>
    </OnboardingShell>
  );
}

export function OnboardingSuccessPage() {
  return (
    <main className="success-screen">
      <div className="success-medal"><ShieldCheck /></div>
      <h1>Your SideKiq profile is ready.</h1>
      <p>The worker dashboard, opportunities, workspace, payouts, ratings, and public profile are all connected.</p>
      <Link to="/worker" className="btn btn-primary">Open worker dashboard <ArrowRight /></Link>
    </main>
  );
}

function OnboardingShell({ step, title, next, children }) {
  return (
    <main className="onboarding-page">
      <section className="signup-panel onboarding-card">
        <span className="eyebrow">Step {step} / 06</span>
        <h1>{title}</h1>
        <p>These fields are prefilled with demo data so you can move through the connected product quickly.</p>
        {children}
        <div className="button-row"><Link className="btn btn-primary" to={next}>Continue</Link><Link className="btn btn-ghost" to="/signup">Back</Link></div>
      </section>
    </main>
  );
}
