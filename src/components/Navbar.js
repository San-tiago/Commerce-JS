import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faSearch } from '@fortawesome/free-solid-svg-icons';
import NavIcons from './NavIcons';
function Navbar({ togglemlLinks }) {
  return (
    <div className="max-w-full bg-white border flex justify-between px-10 py-3 text-gray-700 md:justify-around md:px-6 lg:px-24 lg:justify-between">
      <div className="hidden lg:flex items-center">
        <div className="space-x-14 text-xs">
          <a href="">Home</a>
          <a href="" className="border-b-2 border-gray-600 py-1">
            Shop
          </a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="font-semibold text-3xl">LOGO</p>
      </div>
      <div className="hidden bg-gray-100 rounded-full px-4 py-2 space-x-3 md:flex">
        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={faSearch} className="text-2xl" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search ..."
            className="bg-gray-100 px-2 text-light"
          />
        </div>
      </div>
      <NavIcons />
      <div className="flex items-center justify-center lg:hidden">
        <FontAwesomeIcon
          icon={faAlignJustify}
          className="text-xl"
          onClick={togglemlLinks}
        />
      </div>
    </div>
  );
}

export default Navbar;
