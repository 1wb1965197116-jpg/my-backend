const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Endpoint to list all Tampermonkey scripts
app.get('/api/tamper', (req, res) => {
  const scriptsDir = path.join(__dirname, 'tamper_scripts');
  if (!fs.existsSync(scriptsDir)) return res.json([]);
  
  const files = fs.readdirSync(scriptsDir)
    .filter(f => f.endsWith('.user.js'))
    .map(f => ({
      name: f,
      content: fs.readFileSync(path.join(scriptsDir, f), 'utf-8')
    }));
  
  res.json(files);
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
