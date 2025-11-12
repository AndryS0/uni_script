const apiClient = require('./client');

/**
 * Service layer - handles business logic
 */
class ProxyService {
  /**
   * Proxies a request to the API server
   * @param {string} path - The path to proxy
   * @returns {Promise<any>} The response from the API
   */
  async proxyRequest(path) {
    try {
      const data = await apiClient.get(path);
      return data;
    } catch (error) {
      throw new Error(`Proxy service error: ${error.message}`);
    }
  }
}

module.exports = new ProxyService();
