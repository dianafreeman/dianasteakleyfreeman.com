import React from 'react';
import { Provider } from 'mobx-react';
import Store from './Store';

const StoreProvider = ({ children }) => {
  const store = new Store();

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
