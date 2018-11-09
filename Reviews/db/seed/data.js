const faker = require('faker');

const dummy_review = [];

const dummy_user = [];

for (let i = 1; i <= 10000; i++) {
  dummy_review.push({
    id: i,
    reviewer_id: Math.floor(Math.random() * 100) + 1,
    review_body: faker.lorem.paragraph(),
    review_time: faker.date.past(),
    accuracy: Math.floor(Math.random() * 5) + 1,
    communication: Math.floor(Math.random() * 5) + 1,
    cleanliness: Math.floor(Math.random() * 5) + 1,
    'check-in': Math.floor(Math.random() * 5) + 1,
    value: Math.floor(Math.random() * 5) + 1,
    location: Math.floor(Math.random() * 5) + 1,
    house_id: Math.floor(Math.random() * 100) + 1,
  });
}

for (let j = 1; j <= 1000; j++) {
  dummy_user.push({
    id: j,
    name: faker.name.findName(),
    avatarUrl: faker.image.avatar(),
  });
}

module.exports.users = dummy_user;
module.exports.reviews = dummy_review;