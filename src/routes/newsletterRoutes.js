const express = require('express');
const { subscribers, campaigns } = require('../data/store');

const router = express.Router();

// GET: Retrieve subscribers and campaigns
router.get('/subscribers', (req, res) => {
  res.status(200).json({ success: true, data: subscribers });
});

router.get('/campaigns', (req, res) => {
  res.status(200).json({ success: true, data: campaigns });
});

// POST: Register new newsletter subscriber
router.post('/subscribe', (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, message: 'Valid email address is required.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    if (subscribers.some(s => s.email === cleanEmail)) {
      return res.status(409).json({ success: false, message: 'Email is already subscribed.' });
    }

    const newSub = {
      id: Date.now(),
      email: cleanEmail,
      subscribedAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    subscribers.unshift(newSub);
    res.status(201).json({ success: true, message: 'Successfully subscribed to newsletter!', data: newSub });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE: Unsubscribe / Remove subscriber
router.delete('/subscribers/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = subscribers.findIndex(s => s.id === id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Subscriber not found.' });
    }

    subscribers.splice(index, 1);
    res.status(200).json({ success: true, message: 'Subscriber removed successfully.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST: Dispatch email campaign to all subscribers
router.post('/campaigns', (req, res) => {
  try {
    const { subject, body } = req.body;
    if (!subject || !body) {
      return res.status(400).json({ success: false, message: 'Campaign subject and body are required.' });
    }

    if (subscribers.length === 0) {
      return res.status(400).json({ success: false, message: 'Cannot dispatch campaign: No subscribers found.' });
    }

    const newCampaign = {
      id: Date.now(),
      subject: subject.trim(),
      body: body.trim(),
      sentAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      recipientCount: subscribers.length,
      status: 'Dispatched'
    };

    campaigns.unshift(newCampaign);
    res.status(201).json({
      success: true,
      message: `Email campaign successfully dispatched to ${subscribers.length} subscribers!`,
      data: newCampaign
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;