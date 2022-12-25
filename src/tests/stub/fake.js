import { faker } from "@faker-js/faker";

/**
 * 
 * @param { Array<String>} itemLabels 
 * @returns 
 */
export const createFormOptions = (itemLabels) => {
  return itemLabels.map((v) => {
    return {
      value: faker.helpers.slugify(v).toLowerCase(),
      label: v
    };
  });
};
