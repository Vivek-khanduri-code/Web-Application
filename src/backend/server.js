const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
const corsOptions = {
  origin: 'https://web-application-give.vercel.app', // Match your frontend origin
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Parse JSON bodies
app.use(express.json());

// Define POST route for /api/submit
app.post('/api/submit', async (req, res) => {
  try {
    const { name, email, number, message } = req.body;
    // Save data to MongoDB or process as needed
    res.status(200).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save form data', error });
  }
});

// Start server (for local testing or if needed for Vercel)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});