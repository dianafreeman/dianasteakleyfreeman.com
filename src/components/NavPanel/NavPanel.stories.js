import React, { useContext } from 'react';
import NavPanel from '.';
import { StoreContext } from '../../stores';
import Layout from '../Layout/Layout';

export const whenOpen = () => {
  const store = useContext(StoreContext);
  store.navIsOpen = true
  return <Layout store={store}><NavPanel store={store} /></Layout>;
};

export default {
  title: 'NavPanel',
  component: NavPanel,
};
