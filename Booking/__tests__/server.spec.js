/* eslint-disable no-unused-expressions */

import { expect } from 'chai';
import fetch from 'supertest';
import api from '../server/api';
import db from '../db/controllers/index';

describe('Server API', () => {
  it('should respond with 200 to a GET at /',
    () => fetch(api).get('/')
      .then((res) => {
        expect(res.statusCode).to.equal(200);
      }));

  it('should respond with 200 to GET at /customers',
    () => fetch(api).get('/customers/1')
      .then((res) => {
        expect(res.statusCode).to.equal(200);
      }));

  it('should respond with 200 to GET at /rooms',
    () => fetch(api).get('/rooms/10')
      .then((res) => {
        expect(res.statusCode).to.equal(200);
      }));

  it('should respond with 404 to GET at non-existant listing',
    () => fetch(api).get('/listing/1042')
      .then((res) => {
        expect(res.statusCode).to.equal(404);
      }));

  it('should respond with 200 to POST at /booking', () => {
    const mockBooking = {
      listing_id: 1000,
      customer_id: 1000,
      start_date: 1000,
      end_date: 1000,
      total_cost: 1000,
      host_booking: false,
    };

    return fetch(api).post('/booking')
      .send(mockBooking)
      .then((res) => {
        expect(res.statusCode).to.equal(200);
      })
      .then(() => db.booking.get('listing_id', 1000))
      .then((data) => {
        expect(data.listing_id).to.equal(1000);
      })
      .then(() => { db.booking.delete('listing_id', 1000); });
  });
});
