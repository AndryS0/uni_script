require('dotenv').config();
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const serverName = process.env.SERVER_NAME || 'Unknown';
  res.send(`Hello, world. My name is ${serverName}`);
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server };