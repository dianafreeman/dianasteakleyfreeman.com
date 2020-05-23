import React, { useState, createContext } from 'react';

const DEFAULT_VALUE = false;

export const NavContext = createContext(DEFAULT_VALUE);

export const NavProvider = props => {
  const [isOpen, setOpen] = useState(DEFAULT_VALUE);
  return <NavContext.Provider value={[isOpen, setOpen]}>{props.children}</NavContext.Provider>;
};
