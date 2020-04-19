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

$	 yarn run dev

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

$	 yarn run build

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

$  yarn run test

yarn test
# or
npm run test
```

### Deploy

Run the following command to deploy to netlify.

```bash
yarn deploy

$	 yarn run deploy
```

## Platforms & Tooling

- GatsbyJS
- [React Spring](https://github.com/drcmda/react-spring)
- [Styled-Components](https://www.styled-components.com/)
- React Storybook
- React Spring
- GraphQL
- Cypress.io
- CircleCI - CI/CD
- Netlfiy
- Reach Router

## Project Structure

### Configuration Targets

- Development

  - Storybook
  - Code Coverage
  - Babel & Babel Plugins
  - Post CSS

```
yarn deploy
```

## Platforms & Tooling

- GatsbyJS
- [React Spring](https://github.com/drcmda/react-spring)
- [Styled-Components](https://www.styled-components.com/)
- React Storybook
- React Spring
- GraphQL
- Cypress.io
- CircleCI - CI/CD
- Netlfiy
- Reach Router

## Project Structure

### Configuration Targets

- Development

  - Storybook
  - Code Coverage
  - Babel & Babel Plugins
  - Post CSS

- Testing

  - Jest Config: `./jest.config.js`
  - Code Coverage
  - Cypress

- Build: `src/pages/index.jsx`
  - `./gatsby-config.js`
  - page configurations for production build:
    `./gatsby-node.js`

## Notes

- files in the static folder will not be processed by webpack -- they will be copied to the public folder untouched
