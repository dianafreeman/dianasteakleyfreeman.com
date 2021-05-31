// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ["./src/**/*.[js|jsx]"],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ["/node_modules/"],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ["json", "text", "lcov", "clover"],

  globals: {},
  setupFilesAfterEnv: ["./config/test/setupTests.js"],
  testMatch: ["**/__tests__/**/* .[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/"],

  // This option sets the URL for the jsdom environment.
  // It is reflected in properties such as location.href
  testURL: "http://localhost",
  // Indicates whether each individual test should be reported during the run
  verbose: false,
};
