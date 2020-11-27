import React from 'react';
import Helmet from './Helmet';
import Main from './Main';

function Layout({ children }) {
  return (
    <>
      <Helmet />
      <Main>{children}</Main>
    </>
  );
}

export default Layout;
