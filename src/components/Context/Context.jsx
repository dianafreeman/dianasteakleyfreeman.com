import React, { useState } from 'react';
import { data, schemaOrgWebPage, breadcrumb } from '../../config/web/data';
import theme from '../../config/theme';

export const Context = React.createContext({ theme, data });

export const Provider = ({ children }) => <Context.Provider>{children}</Context.Provider>;

