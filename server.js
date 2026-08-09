const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// serve everything in /public (index.html, and any real photos/QR you add later)
app.use(express.static(path.join(__dirname, 'public')));

// always fall back to index.html (single-page site)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Sorry-meri-jaan site running on port ${PORT}`);
});
