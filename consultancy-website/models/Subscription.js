const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    email: String,
    subscribedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
