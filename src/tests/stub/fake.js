import { faker } from "@faker-js/faker";

export const createFormOptions = (length = 5) => {
  return Array(length).map((_) => {
    const words = faker.lorem.words(2);
    return {
      value: faker.helpers.slugify(words),
      label: words
    };
  });
};
