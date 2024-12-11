// api/jarvis.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello from Vercel server!' });
  } else {
    res.status(400).json({ message: 'Invalid request' });
  }
}
