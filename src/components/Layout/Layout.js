import React from 'react';

import Navbar from '../Navbar';
import MobileNavIcons from '../MobileNavIcons';

function Layout({ totalItems, mobileLinks, togglemlLinks }) {
  return (
    <>
      <Navbar
        totalItems={totalItems}
        mobileLinks={mobileLinks}
        togglemlLinks={togglemlLinks}
      />
      {mobileLinks ? <MobileNavIcons /> : null}
    </>
  );
}

export default Layout;
