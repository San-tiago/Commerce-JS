import React from 'react';

import Navbar from '../Navbar';
import MobileNavIcons from '../MobileNavIcons';

function Layout({ totalItems }) {
  return (
    <>
      <Navbar totalItems={totalItems} />
    </>
  );
}

export default Layout;
