const mongoose = require('mongoose');

const consultancySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Consultancy', consultancySchema);
