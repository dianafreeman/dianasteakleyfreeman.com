import React, { useState, createContext } from 'react';

export const NavContext = createContext();

export const NavProvider = props => {
  const [isOpen, setOpen] = useState(false);
  return <NavContext.Provider value={[isOpen, setOpen]}>{props.children}</NavContext.Provider>;
};
