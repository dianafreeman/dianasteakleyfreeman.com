"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decoratprs = exports.parameters = void 0;
// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: function enqueue() {},
  hovering: function hovering() {}
}; // This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.

global.__BASE_PATH__ = "/"; // Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.

window.___navigate = function (pathname) {
  action("NavigateTo:")(pathname);
};

var parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
exports.parameters = parameters;
var decoratprs = [Story];
exports.decoratprs = decoratprs;