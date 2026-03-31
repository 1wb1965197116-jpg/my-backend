// server.js
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Simple middleware to log requests
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get('/api/healthz', (req, res) => {
  res.json({ status: 'ok' });
});

// Main route
app.get('/', (req, res) => {
  res.send('Hello from Render! Server is running.');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
