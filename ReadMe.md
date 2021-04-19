<h1 align="center">Welcome to dianasteakleyfreeman.com 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-2.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/dianasfreeman/dianasteakelyfreeman.com#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/dianasfreeman/dianasteakelyfreeman.com/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/dianasfreeman/dianasteakelyfreeman.com/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/dianasfreeman/dianasteakleyfreeman.com" />
  </a>
  <a href="https://api.netlify.com/api/v1/badges/7b5f4c1a-c979-4652-aacf-05076bfa2989/deploy-status" target="_blank">
    <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/7b5f4c1a-c979-4652-aacf-05076bfa2989/deploy-status" />
  </a>
  <a href="https://github.com/dianafreeman/dianasteakleyfreeman.com/workflows/Node.js+CI/badge.svg" target="_blank">
    <img alt="Github Workflow Status" src="https://github.com/dianafreeman/dianasteakleyfreeman.com/workflows/Node.js+CI/badge.svg" />
  </a>

</p>

> Portfolio for Diana M Steakley-Freeman. Coder, Creator, Communicator.

### 🏠 [Homepage](https://dianasteakleyfreeman.com)

## Description

This is a a helluva project, and it should probably be split out into multiple services. But alas, here we are.

At its core, this is a static site generator that creates a React App that renders a 3D scene in a WebGL canvas.

## Install Dependencies

```sh
yarn install
```

## Local Development

### In Standard Mode

Runs the app using gatsby development mode, no extra tooling for ThreeJS debugging.

```sh
yarn start
```

### In Developer Mode

runs the application with debugging logs, browser rendering stats, and controllable ThreeJS properties.

```sh
yarn run dev
```

## Run Unit & Formatting Tests

```sh
yarn test
```

# Build & Deploy

This project is hosted as a static site via Netlify. Netlify auto-deploys the master AND the staging branch.

# TODO

- [] linting with prettier and eslint
- [] under construction page deployed with proper headers

# Tests

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

## Author

👤 **Diana M Steakley-Freeman**

- Twitter: [@dianasfreeman](https://twitter.com/dianasfreeman)
- Github: [@dianasfreeman](https://github.com/dianasfreeman)
- LinkedIn: [@dianasteakleyfreeman](https://linkedin.com/in/dianasteakleyfreeman)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Diana M Steakley-Freeman](https://github.com/dianasfreeman).<br />
This project is [MIT](https://github.com/dianasfreeman/dianasteakelyfreeman.com/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
