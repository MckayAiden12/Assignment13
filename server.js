const express = require('express');
const app = express();

// Sample data
const items = [
  {
    id: 1,
    name: 'Item 1',
    description: 'This is the first item.',
    price: 10.99,
    colors: ['Red', 'Blue'],
    features: ['Feature A', 'Feature B'],
    image: 'https://example.com/item1.jpg',
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'This is the second item.',
    price: 15.99,
    colors: ['Green', 'Yellow'],
    features: ['Feature X', 'Feature Y'],
    image: 'https://example.com/item2.jpg',
  },
  // Add more items here
];

app.get('/api/data', (req, res) => {
  res.json(items);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});