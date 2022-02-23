import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faBell,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function NavIcons({ totalItems }) {
  return (
    <div className="hidden md:flex justify-center items-center space-x-7 text-gray-400 text-xl">
      <div className="relative w-10">
        <Link to="/cart">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="hover:cursor-pointer"
          />
          <span className="bg-red-500 w-4 h-4 text-white rounded-full absolute flex justify-center items-center top-0 right-0 text-xs">
            {totalItems}
          </span>
        </Link>
      </div>
      <FontAwesomeIcon icon={faBell} />
      <FontAwesomeIcon icon={faUserCircle} />
    </div>
  );
}

export default NavIcons;
