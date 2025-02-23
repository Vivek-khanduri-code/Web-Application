export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://web-application-give-stavepgny-vivek-kumar-s-projects-cf48244c.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    if (req.method === 'POST') {
      // Handle POST request logic here
      res.status(200).json({ message: 'Form data saved successfully!' });
    }
  }