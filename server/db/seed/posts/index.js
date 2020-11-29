const faker = require('faker');

function fake() {
  return {
    title: faker.random.words(3),
    createdAt: new Date(),
    excerpt: faker.lorem.words(30),
    content: faker.lorem.paragraphs(5),
    featured_image: faker.image.animals(),
  };
}

const fakeMany = (total = 10) => {
  const posts = [];
  for (i = 0; i < total; i++) {
    const template = fake();
    posts.push(template);
  }
  return posts;
};

module.exports = {
  fake,
  fakeMany,
};
