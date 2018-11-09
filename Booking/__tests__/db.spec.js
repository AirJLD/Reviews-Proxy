/* eslint-disable no-unused-expressions */

import { expect } from 'chai';
import controller from '../db/controllers/index';

describe('Database Queries', () => {
  it('calls the database and returns a user based on id', () => {
    const user = controller.user.get(1);
    return user.then((data) => {
      expect(data.name).to.be.a('string');
      expect(data.id).to.equal(1);
    });
  });

  it('calls the database and returns a listing based on id', () => {
    const listing = controller.listing.get(1);
    return listing.then((data) => {
      expect(data.owner_id).to.exist;
      expect(data.id).to.equal(1);
      expect(data.max_guests).to.exist;
    });
  });

  it('calls the database and returns a customer based on id', () => {
    const customer = controller.customer.get(1);
    return customer.then((data) => {
      expect(data.id).to.equal(1);
      expect(data.name).to.be.a('string');
    });
  });

  it('sets a booking to the database', () => {
    const mockBooking = {
      listing_id: 1001,
      customer_id: 1000,
      start_date: 1000,
      end_date: 1000,
      total_cost: 1000,
      host_booking: false,
    };

    return controller.booking.set(mockBooking)
      .then(() => controller.booking.get('listing_id', 1001))
      .then((data) => {
        expect(data.listing_id).to.exist;
        expect(data.start_date).to.exist;
        expect(data.host_booking).to.be.a('boolean');
      })
      .then(() => { controller.booking.delete('listing_id', 1001); });
  });
});
