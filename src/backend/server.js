// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection

mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        console.log('MongoDB connected');
    }).catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Define a Schema and Model for Form Data
const formDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    message: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

// API Endpoint to Handle Form Submission
app.post('/api/submit', async (req, res) => {
    try {
        const { name, email, number, message } = req.body;

        // Create a new document in MongoDB
        const newFormData = new FormData({ name, email, number, message });
        await newFormData.save();

        res.status(201).json({ message: 'Form data saved successfully!' });
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ message: 'Failed to save form data' });
    }
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});