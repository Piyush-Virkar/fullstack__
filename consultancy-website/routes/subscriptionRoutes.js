const express = require('express');
const Subscription = require('../models/Subscription');
const router = express.Router();

router.post('/subscribe', async (req, res) => {
    const { email } = req.body;
    try {
        const subscription = new Subscription({ email });
        await subscription.save();
        res.status(200).json({ message: 'Subscribed successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error subscribing email.' });
    }
});

module.exports = router;
