import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faBell,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function MobileNavIcons() {
  return (
    <div className="flex flex-col text-gray-400 h-full text-lg bg-white py-3 px-8 md:hidden">
      <div className="flex flex-col text-sm px-3 text-gray-600 space-y-3 py-2 border-b font-light">
        <a href="#">Home</a>
        <Link to="Commerce-Js">
          <button>Shop</button>
        </Link>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className=" py-2">
        <Link to="/cart">
          {' '}
          <div className="flex items-center space-x-3 px-3 py-2 ">
            <FontAwesomeIcon icon={faShoppingCart} />
            <p className=" text-gray-600 text-sm">Cart </p>
          </div>
        </Link>
        <div className="flex items-center space-x-3 px-3 py-2">
          <FontAwesomeIcon icon={faBell} />
          <p className=" text-gray-600 text-sm">Notifications </p>
        </div>
        <div className="flex items-center space-x-3 px-3 py-2">
          <FontAwesomeIcon icon={faUserCircle} />
          <p className=" text-gray-600 text-sm">Account </p>
        </div>
      </div>
    </div>
  );
}

export default MobileNavIcons;
