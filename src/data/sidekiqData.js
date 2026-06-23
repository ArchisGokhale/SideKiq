import {
  BadgeDollarSign,
  Bot,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CheckCircle2,
  Clock3,
  Code2,
  CreditCard,
  FileCheck2,
  LayoutDashboard,
  MessageSquareText,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  WalletCards,
  Wrench
} from 'lucide-react';

export const nav = {
  worker: [
    { label: 'Dashboard', path: '/worker', icon: LayoutDashboard },
    { label: 'Opportunities', path: '/worker/opportunities', icon: Search },
    { label: 'Active Tasks', path: '/worker/tasks', icon: BriefcaseBusiness },
    { label: 'Messages', path: '/worker/messages', icon: MessageSquareText },
    { label: 'Earnings', path: '/worker/earnings', icon: BadgeDollarSign },
    { label: 'Profile', path: '/worker/profile', icon: UserRound },
    { label: 'Settings', path: '/worker/settings', icon: Settings }
  ],
  client: [
    { label: 'Dashboard', path: '/client', icon: LayoutDashboard },
    { label: 'Post Task', path: '/client/post-task', icon: Rocket },
    { label: 'Matches', path: '/client/matches', icon: Sparkles },
    { label: 'Workspace', path: '/client/workspace', icon: BriefcaseBusiness },
    { label: 'Payments', path: '/client/payments', icon: CreditCard },
    { label: 'Settings', path: '/client/settings', icon: Settings }
  ]
};

export const categories = [
  { label: 'AI workflows', icon: Bot, tone: 'purple' },
  { label: 'Web builds', icon: Code2, tone: 'orange' },
  { label: 'Automation', icon: Wrench, tone: 'green' },
  { label: 'Analytics', icon: ChartNoAxesCombined, tone: 'blue' }
];

export const tasks = [
  {
    id: 'T-1048',
    title: 'Automate Shopify refund summaries',
    client: 'Bright Desk',
    category: 'Automation',
    budget: '$420',
    eta: '6h',
    urgency: 'High',
    match: 94,
    status: 'Proposal sent',
    summary: 'Connect Shopify exports to a weekly finance-ready refund summary with clean category grouping.',
    due: 'Today, 8:00 PM',
    milestones: ['Scope confirmed', 'Workflow draft', 'Client review', 'Final handoff']
  },
  {
    id: 'T-1049',
    title: 'Launch page polish for AI waitlist',
    client: 'Loopline',
    category: 'Web builds',
    budget: '$650',
    eta: '1 day',
    urgency: 'Medium',
    match: 91,
    status: 'Open',
    summary: 'Refine hero, pricing block, responsive layout, and analytics events before the Product Hunt launch.',
    due: 'Tomorrow, 11:00 AM',
    milestones: ['Audit', 'Design pass', 'Responsive QA', 'Deploy']
  },
  {
    id: 'T-1050',
    title: 'Prompt evaluator for support replies',
    client: 'Northwind',
    category: 'AI workflows',
    budget: '$780',
    eta: '2 days',
    urgency: 'High',
    match: 88,
    status: 'Interested',
    summary: 'Build a lightweight rubric that scores draft support replies for tone, accuracy, and escalation risk.',
    due: 'Fri, 4:00 PM',
    milestones: ['Rubric', 'Test set', 'Scoring UI', 'Docs']
  },
  {
    id: 'T-1051',
    title: 'CSV cleanup and investor report',
    client: 'Civic Labs',
    category: 'Analytics',
    budget: '$260',
    eta: '4h',
    urgency: 'Low',
    match: 82,
    status: 'Open',
    summary: 'Normalize messy CSV exports and generate a shareable investor metrics sheet.',
    due: 'Next Mon',
    milestones: ['Data cleanup', 'Metric checks', 'Report export']
  }
];

export const activeTask = {
  ...tasks[0],
  progress: 68,
  room: 'WK-8842',
  deliverables: ['refund-flow.n8n.json', 'summary-template.xlsx'],
  notes: ['Client wants category names to match QuickBooks.', 'Need final sample export before handoff.']
};

export const messages = [
  { from: 'Maya Chen', role: 'Client', text: 'The first automation pass looks clean. Can we add chargeback reasons too?', time: '10:42 AM' },
  { from: 'You', role: 'Worker', text: 'Yes. I can add a second sheet and keep the main summary untouched.', time: '10:45 AM' },
  { from: 'Maya Chen', role: 'Client', text: 'Perfect. I uploaded a fresh export in the workspace.', time: '10:48 AM' }
];

export const earnings = [
  { month: 'Jan', value: 1800 },
  { month: 'Feb', value: 2400 },
  { month: 'Mar', value: 2100 },
  { month: 'Apr', value: 3200 },
  { month: 'May', value: 3900 },
  { month: 'Jun', value: 4700 }
];

export const transactions = [
  { id: 'PAY-2841', title: 'Shopify refund automation', amount: '$420', status: 'Paid', method: 'UPI', date: 'Jun 21' },
  { id: 'PAY-2799', title: 'Landing page polish', amount: '$650', status: 'Escrow', method: 'Razorpay', date: 'Jun 18' },
  { id: 'PAY-2738', title: 'CSV cleanup report', amount: '$260', status: 'Paid', method: 'UPI', date: 'Jun 14' }
];

export const timeline = [
  { icon: CheckCircle2, title: 'Profile verified', detail: 'Email, portfolio, and payout identity approved.', time: '9:12 AM' },
  { icon: Star, title: 'New 5-star rating', detail: 'Northwind praised your delivery clarity.', time: 'Yesterday' },
  { icon: WalletCards, title: 'Payout processed', detail: '$420 is on the way to your UPI account.', time: 'Jun 21' },
  { icon: ShieldCheck, title: 'Priority badge renewed', detail: 'Fast response streak extended to 18 tasks.', time: 'Jun 20' }
];

export const workers = [
  { name: 'Aarav Mehta', title: 'Automation builder', rating: '4.98', rate: '$45/hr', tags: ['n8n', 'APIs', 'Sheets'], match: 96 },
  { name: 'Nia Brooks', title: 'Frontend engineer', rating: '4.94', rate: '$55/hr', tags: ['React', 'Design systems', 'QA'], match: 92 },
  { name: 'Sam Rivera', title: 'AI workflow specialist', rating: '4.91', rate: '$60/hr', tags: ['Prompts', 'Evaluation', 'Support'], match: 89 }
];

export const clientProjects = [
  { title: 'Refund summary automation', status: 'In workspace', budget: '$420', owner: 'Aarav Mehta', due: 'Today' },
  { title: 'AI waitlist landing page', status: 'Matching', budget: '$650', owner: '3 matches', due: 'Tomorrow' },
  { title: 'Investor metrics cleanup', status: 'Paid', budget: '$260', owner: 'Sam Rivera', due: 'Complete' }
];

export const stats = [
  { label: 'Open matches', value: '14', hint: '+3 today', icon: Sparkles },
  { label: 'Active earnings', value: '$4.7k', hint: 'June payout', icon: BadgeDollarSign },
  { label: 'Response time', value: '8m', hint: 'Top 2%', icon: Clock3 },
  { label: 'Completion rate', value: '98%', hint: '42 tasks', icon: FileCheck2 }
];
