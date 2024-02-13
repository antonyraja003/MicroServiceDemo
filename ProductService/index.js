// ProductService index.js
const express = require('express');
const axios = require('axios');
const { useTreblle } = require('treblle')


const app = express();
const port = 3002;

app.use(express.json())

useTreblle(app, {
  apiKey: '4yZAjM7ZvlYG52pC0xlFucZNguiN9mXM',
  projectId: 'BXg6IDi48l7X8vm8',
})

app.get('/products', async (req, res) => {
  try {
    // const response = await axios.get('http://user-service:3001/users');
    const response = await axios.get('http://localhost:3001/users');
    const users = response.data.users;
    res.json({ products: [{ id: 101, name: 'Product A', users }] });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Product Service listening at http://localhost:${port}`);
});

