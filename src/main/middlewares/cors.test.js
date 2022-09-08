const request = require('supertest')
const app = require('../config/app')

describe('Cors Middlewares', () => {
  test('Should enable cors', async () => {
    app.get('/test_cors', (req, res) => {
      res.send('hello')
    })

    const res = await request(app)
      .get('/test')

    expect(res.headers['access-control-allow-origin']).toBe('*')
    expect(res.headers['access-control-allow-methods']).toBe('*')
    expect(res.headers['access-control-allow-headers']).toBe('*')
  })
})
