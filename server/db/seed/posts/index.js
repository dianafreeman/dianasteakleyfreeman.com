const faker = require('faker');

function generate() {
  return {
    title: faker.random.words(3),
    createdAt: new Date(),
    excerpt: faker.lorem.words(30),
    content: faker.lorem.paragraphs(5),
    featured_image: faker.image.animals(),
  };
}

const generateMany = (total = 10) => {
  const posts = [];
  for (i = 0; i < total; i++) {
    const template = generate();
    posts.push(template);
  }
  return posts;
};

module.exports = {
  generate,
  generateMany,
};
