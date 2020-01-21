
module.exports = {
  verbose: true,
  transform: {
    "^.+\\.jsx?$": `<rootDir>/scripts/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`, `__templates__`, `__snapshots__`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testRegex:`.*spec.js?x`,
  testURL: `http://localhost`,
  setupFilesAfterEnv: [`<rootDir>/src/config/test-setup.config.js`],
  coverageReporters: ['json', 'text', 'lcovonly', 'clover']
}

