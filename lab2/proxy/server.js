const express = require('express');
const config = require('./config');
const routes = require('./routes');

/**
 * Server layer - initializes and configures the Express application
 */

const app = express();
const PORT = config.get('port');

// Use routes
app.use('/', routes);

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
  console.log(`Forwarding requests to: ${config.get('apiUrl')}`);
});

module.exports = { app, server };
