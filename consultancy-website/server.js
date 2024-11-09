const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const consultancyRoutes = require('./routes/consultancyRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.use('/api', consultancyRoutes);
app.use('/api', subscriptionRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(`Error connecting to MongoDB: ${error.message}`));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
