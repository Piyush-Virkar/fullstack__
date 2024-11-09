const express = require('express');
const Consultancy = require('consultancy-website\models\Consultancy.js');
const router = express.Router();

router.post('/consultancy', async (req, res) => {
    const { name, email, phone, message } = req.body;
    try {
        const consultancy = new Consultancy({ name, email, phone, message });
        await consultancy.save();
        res.status(200).json({ message: 'Consultancy request received successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving consultancy request.' });
    }
});

module.exports = router;
