export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://web-application-give.vercel.app'); // Match your frontend origin
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight (OPTIONS) request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Handle POST request
  if (req.method === 'POST') {
    try {
      const { name, email, number, message } = req.body;
      // Ensure FormData model is imported and defined
      const FormData = require('../../src/backend/models/formData'); // Adjust the path as necessary
      const newFormData = new FormData({ name, email, number, message });
      await newFormData.save(); // Save to MongoDB
      res.status(200).json({ message: 'Form data saved successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to save form data', error });
    }
  } else {
    // Return 405 if method is not POST or OPTIONS
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}