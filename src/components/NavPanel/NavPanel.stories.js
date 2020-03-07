import React from 'react';
import NavPanel from '.';
import { StoreContext } from '../../stores';
import Layout from '../Layout/Layout';

export const whenOpen = () => {
  return <Layout><NavPanel /></Layout>;
};

export default {
  title: 'NavPanel',
  component: NavPanel,
};
