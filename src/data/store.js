/**
 * @project Automated Email Dispatcher & Newsletter REST API
 * @author Rana Yasir Mahy Ud Din (https://ranayasir.unaux.com/)
 */

const subscribers = [
  { id: 1, email: 'bilal.ahmed@example.com', subscribedAt: '2026-11-10 12:00' },
  { id: 2, email: 'zainab.raza@example.com', subscribedAt: '2026-11-12 14:30' },
  { id: 3, email: 'usman.tariq@example.com', subscribedAt: '2026-11-15 09:15' }
];

const campaigns = [
  {
    id: 101,
    subject: '🚀 Welcome to DevPulse Weekly Engineering Insights',
    body: 'Hello subscriber! Explore our latest full-stack architecture tutorials and Node.js microservices guides.',
    sentAt: '2026-11-16 10:00',
    recipientCount: 3,
    status: 'Sent'
  }
];

module.exports = { subscribers, campaigns };