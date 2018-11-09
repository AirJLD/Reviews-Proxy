import data from '../db/seeders/data';

test('Should produce a random number between 1 and 100', () => {
  expect(data.generate.numberGenerator(1, 100)).toBeGreaterThan(0);
  expect(data.generate.numberGenerator(1, 100)).toBeLessThanOrEqual(100);
});

test('Should create a valid user', () => {
  data.generate.users(1);
  expect(data.users[0].id).toBe(1);
  expect(data.users[0].name).toBeDefined();
});

test('Should create a valid customer', () => {
  data.generate.customers(1);
  expect(data.customers[0].id).toBe(1);
  expect(data.customers[0].name).toBeDefined();
});

test('Should create a valid listing', () => {
  data.generate.listings(1);
  expect(data.listings[0].id).toBe(1);
  expect(data.listings[0].max_guests).toBeLessThanOrEqual(15);
  expect(data.listings[0].owner_id.toBeDefined);
});

test('Should create a valid booking', () => {
  data.generate.bookings(1);
  expect(typeof data.bookings[0].total_cost).toBe('number');
  expect(data.bookings[0].customer_id).toBeLessThanOrEqual(15);
  expect(data.bookings[0].host_booking).toBe(false);
});
