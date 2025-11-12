const axios = require('axios');
const config = require('./config');

/**
 * Client layer - handles HTTP requests to the API server
 */
class ApiClient {
  constructor() {
    this.baseURL = config.get('apiUrl');
    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: 5000,
    });
  }

  /**
   * Fetches data from the specified path
   * @param {string} path - The API path to fetch
   * @returns {Promise<any>} The response data
   */
  async get(path) {
    try {
      const response = await this.client.get(path);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch from API: ${error.message}`);
    }
  }
}

module.exports = new ApiClient();
