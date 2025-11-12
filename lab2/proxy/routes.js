const express = require('express');
const proxyService = require('./service');

const router = express.Router();

/**
 * Routing layer - defines API endpoints
 */

/**
 * GET / - Proxies the request to the API server's root path
 */
router.get('/', async (req, res) => {
  try {
    const data = await proxyService.proxyRequest('/');
    res.send(data);
  } catch (error) {
    console.error('Error proxying request:', error.message);
    res.status(500).send('Error communicating with API server');
  }
});

module.exports = router;
