// Create web server
const express = require('express');
const app = express();
// Create a port
const port = 3000;
// Create a public folder
app.use(express.static('public'));
// Create a comments array
const comments = [
  { name: 'Stacy', comment: 'Hello!' },
  { name: 'John', comment: 'How are you?' },
  { name: 'Emily', comment: 'Good morning!' }
];
// Create a route
app.get('/comments', (req, res) => {
  res.json(comments);
});
// Listen to the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
