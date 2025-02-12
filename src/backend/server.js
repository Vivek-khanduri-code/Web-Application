const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows cross-origin requests
app.use(bodyParser.json()); // Parses JSON request body

// API Route to Handle Form Submission
app.post('/https://your-vercel-backend.vercel.app/api/endpoint', (req, res) => {
  console.log(req.body); // Received form data
  res.json({ message: 'Form submitted successfully' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
