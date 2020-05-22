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
npm build
```

### Test

Run the following to run formatting, unit, and e2e tests.

```bash
yarn test
# or
npm test
```

### Deploy

Run the following command to deploy to netlify.

```bash
yarn deploy
# or
npm deploy
```

## Infrastructure & Tooling

### Development Toolset

- [Styled-Components](https://www.styled-components.com/)
- React Spring
- Prettier
- GraphQL

### Build Flow

- Babel
- GatsbyJS

### Testing Flow

- React Storybook
- Cypress.io

### Deployment Flow

- Netlify
- CircleCI - CI/CD

## Project Structure

### Context & Context Providers

I wanted to explore the use of `React.Context` for managing configurable state. The following Contexts are used to hanldle site UI configuration.

- NavContext
- ThemeContext
- AbilityContext

### Convenience Scripts

#### `yarn build:component`

This will run the [create-component-app](https://github.com/CVarisco/create-component-app) library to generate component files using the templates stored in the DianaBookES7 directory.

**TODO: This should be a stand alone package in the `dianabook`.**

[^1] Configuration details in

### Configuration Files

- React Storybook : [`./.storybook/config.js`](./.storybook/config.js)
- Jest Unit Testing : [`./test/jest.config.js`](./test/jest.config.js)
- Cypress E2E testing : [`./test/cypress.json`](test/cypress.json)
- Gatsby webpack : [`./gatsby-config.js`](./gatsby-config.js)
- Gatsby build : [`./gatsby-node.js`](./gatsby-node.js)

## ToDo List

Thigns to do **now**

- [ ] Set up Github actions
- [ ] Replace React.Suspense with Reach Routes
- [ ] Contact the media

Things to do **next**

- [ ] Dockerize this whole thing

Things to do **eventually**

- [x] move the component generator at yarn `build:component` out of this project and into its own
