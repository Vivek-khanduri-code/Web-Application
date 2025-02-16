const express = require('express');
const { connect } = require('./db');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post('/api/submit', async (req, res) => {
  try {
    const db = await connect();
    const collection = db.collection('DB_UNIQUE_FROM'); // Replace with your collection name
    const result = await collection.insertOne(req.body);
    res.status(201).json({ message: 'Form submitted successfully', result });
  } catch (err) {
    console.error('Error submitting form:', err);
    res.status(500).json({ error: 'Failed to submit form' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});