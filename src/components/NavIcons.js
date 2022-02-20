import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faBell,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
function NavIcons() {
  return (
    <div className="hidden md:flex justify-center items-center space-x-7 text-gray-400 text-xl">
      <FontAwesomeIcon icon={faShoppingCart} />
      <FontAwesomeIcon icon={faBell} />
      <FontAwesomeIcon icon={faUserCircle} />
    </div>
  );
}

export default NavIcons;
