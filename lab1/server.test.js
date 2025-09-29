const request = require('supertest');
const { app, server } = require('./server');

describe('Express Server Tests', () => {
  afterAll((done) => {
    server.close(done);
  });

  test('GET / should return hello message with server name', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.text).toMatch(/Hello, world\. My name is \w+/);
    expect(response.text).toContain('MyAwesomeServer');
  });

  test('GET / should handle missing SERVER_NAME gracefully', async () => {
    delete process.env.SERVER_NAME;

    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world. My name is Unknown');
  });
});