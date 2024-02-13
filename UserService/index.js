// UserService index.js
const express = require('express');
const app = express();
const port = 3001;

app.get('/users', (req, res) => {
  res.json({ users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] });
});

app.listen(port, () => {
  console.log(`User Service listening at http://localhost:${port}`);
});


