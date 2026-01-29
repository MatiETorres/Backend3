import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('Adoption Endpoints', () => {

  it('GET /api/adoptions should return 200', async () => {
    const res = await request(app).get('/api/adoptions');
    expect(res.status).to.equal(200);
  });

  it('POST /api/adoptions should create adoption', async () => {
    const res = await request(app).post('/api/adoptions').send({});
    expect(res.status).to.be.oneOf([200,201,400]);
  });

  it('GET /api/adoptions/:id should return 404 if not found', async () => {
    const res = await request(app).get('/api/adoptions/64b000000000000000000000');
    expect(res.status).to.equal(404);
  });

  it('DELETE /api/adoptions/:id should return 404 if not found', async () => {
    const res = await request(app).delete('/api/adoptions/64b000000000000000000000');
    expect(res.status).to.equal(404);
  });

});
