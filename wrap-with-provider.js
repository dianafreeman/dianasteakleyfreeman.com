import React from 'react';
import { NavProvider, NavContext } from './src/context/NavContext';

const wrapWithProvider = ({ element }) => <NavProvider>{element}</NavProvider>;

export default wrapWithProvider;
