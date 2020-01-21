const React = require('react');
const { Provider } = require('mobx-react');
const Store = require('./src/stores/Store');

// eslint-disable-next-line react/display-name,react/prop-types
module.exports = ({ element }) => <Provider store={Store}>{element}</Provider>;
