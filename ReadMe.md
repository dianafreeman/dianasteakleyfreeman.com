# dianasteakleyfreeman.com

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme) [![Netlify Status](https://api.netlify.com/api/v1/badges/7b5f4c1a-c979-4652-aacf-05076bfa2989/deploy-status)](https://app.netlify.com/sites/loving-sammet-d1bb4f/deploys)

## Background

## Install

```bash
yarn install
# or
npm install
```

## Usage

### Develop

Run the following command to open the Gatsby/React/Node development environment.

```bash
yarn dev
# or
npm run dev
```

### Build

Run the following command to build the static site

```bash
yarn build
# or
npm run build
```

### Test

Run the following to run formatting, unit, and e2e tests.

```bash
yarn test
# or
npm run test
```

### Deploy

Run the following command to deploy to netlify.

```bash
yarn deploy
```

## Infrastructure & Tooling

### Development Toolset

- GraphQL
- [Styled-Components](https://www.styled-components.com/)
- React Spring
- Prettier

### Build Blow

- Babel
- GatsbyJS

### Testing Flow

- React Storybook
- Cypress.io

### Deployment Flow

- Netlify
- CircleCI - CI/CD

## Project Structure

### Configuration Files

- React Storybook : [`./.storybook/config.js`](./.storybook/config.js)
- Jest Unit Testing : [`./test/jest.config.js`](./test/jest.config.js)
- Cypress E2E testing : [`test/cypress/cypress.json`](test/cypress/cypress.json)
- Gatsby webpack : [`./gatsby-config.js`](./gatsby-config.js)
- Gatsby build : [`./gatsby-node.js`](./gatsby-node.js)

## Notes

- files in the static folder will not be processed by webpack -- they will be copied to the public folder untouched
