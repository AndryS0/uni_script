require('dotenv').config();
const convict = require('convict');

// Define configuration schema
const config = convict({
  port: {
    doc: 'The port to bind the proxy server',
    format: 'port',
    default: 3001,
    env: 'PORT',
    arg: 'port'
  },
  apiUrl: {
    doc: 'The URL of the API server to proxy requests to',
    format: String,
    default: 'http://localhost:3000',
    env: 'API_URL',
    arg: 'api-url'
  }
});

// Validate configuration
config.validate({ allowed: 'strict' });

module.exports = config;
