import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="page-landing">
      <header className="lp-topbar">
        <div className="brand">SideKiq</div>
        <nav className="lp-nav">
          <a href="#how">How it works</a>
          <a href="#benefits">Benefits</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="lp-actions">
          <Link to="/dashboard" className="btn btn-outline">Dashboard</Link>
          <Link to="/" className="btn btn-primary">Get Started</Link>
        </div>
      </header>

      <main className="lp-hero">
        <div className="lp-hero-copy">
          <div className="eyebrow">NOW LIVE</div>
          <h1 className="hero-title">Fast technical help — on demand</h1>
          <p className="hero-sub">Connect with verified engineers to fix production issues, ship features, and unblock releases — in minutes.</p>
          <div className="cta-row">
            <Link to="/dashboard" className="btn btn-primary">Find Work</Link>
            <button className="btn btn-ghost">Post a Task</button>
          </div>
        </div>

        <aside className="lp-hero-panel">
          <div className="panel-inner">
            <div className="stat"><strong>2,400+</strong><div className="muted">Developers</div></div>
            <div className="stat"><strong>15 min</strong><div className="muted">Avg response</div></div>
            <div className="stat"><strong>4.9★</strong><div className="muted">Avg rating</div></div>
          </div>
        </aside>
      </main>

      <section id="how" className="section">
        <h2>How it works</h2>
        <div className="steps-grid">
          <div className="step">Post a task</div>
          <div className="step">Developers respond</div>
          <div className="step">Collaborate in workspace</div>
          <div className="step">Approve & pay</div>
        </div>
      </section>

      <footer className="lp-footer">© SideKiq</footer>
    </div>
  )
}
