const express = require('express');
const app = express();
const data = require('./data'); // Import your data

app.get('/api/data', (req, res) => {
  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});