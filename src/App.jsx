import { useEffect, useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout.jsx';
import { PublicNav } from './components/PublicNav.jsx';
import {
  LandingPage,
  OnboardingSuccessPage,
  PortfolioVerificationPage,
  PricingAvailabilityPage,
  ProfileSetupPage,
  RoleSelectionPage,
  SignupPage
} from './pages/PublicPages.jsx';
import {
  ActiveTasks,
  EarningsPage,
  MessagesPage,
  Opportunities,
  OpportunityDetail,
  PaymentReceived,
  PaymentRequest,
  ProfilePage,
  RatingPage,
  SelectedSuccess,
  WorkerDashboard,
  WorkerSettings
} from './pages/WorkerPages.jsx';
import {
  ClientDashboard,
  ClientMatches,
  ClientPayments,
  ClientSettings,
  ClientWorkspace,
  PostTask
} from './pages/ClientPages.jsx';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('sidekiq-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sidekiq-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark');

  return (
    <Routes>
      <Route path="/" element={<PublicShell theme={theme} toggleTheme={toggleTheme} />}>
        <Route index element={<LandingPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="onboarding/role" element={<RoleSelectionPage />} />
        <Route path="onboarding/profile" element={<ProfileSetupPage />} />
        <Route path="onboarding/pricing" element={<PricingAvailabilityPage />} />
        <Route path="onboarding/portfolio" element={<PortfolioVerificationPage />} />
        <Route path="onboarding/success" element={<OnboardingSuccessPage />} />
      </Route>

      <Route path="/worker" element={<AppLayout role="worker" theme={theme} toggleTheme={toggleTheme} />}>
        <Route index element={<WorkerDashboard />} />
        <Route path="opportunities" element={<Opportunities />} />
        <Route path="opportunities/:id" element={<OpportunityDetail />} />
        <Route path="selected" element={<SelectedSuccess />} />
        <Route path="tasks" element={<ActiveTasks />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="payment-request" element={<PaymentRequest />} />
        <Route path="payment-received" element={<PaymentReceived />} />
        <Route path="rating" element={<RatingPage />} />
        <Route path="earnings" element={<EarningsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<WorkerSettings />} />
      </Route>

      <Route path="/client" element={<AppLayout role="client" theme={theme} toggleTheme={toggleTheme} />}>
        <Route index element={<ClientDashboard />} />
        <Route path="post-task" element={<PostTask />} />
        <Route path="matches" element={<ClientMatches />} />
        <Route path="workspace" element={<ClientWorkspace />} />
        <Route path="payments" element={<ClientPayments />} />
        <Route path="settings" element={<ClientSettings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function PublicShell({ theme, toggleTheme }) {
  return (
    <>
      <PublicNav theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
    </>
  );
}
