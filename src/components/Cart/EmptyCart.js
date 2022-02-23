import React from 'react';
import EmptyCartImg from '../../img/empty-cart.png';
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="col-span-8 w-100 h-screen flex justify-center items-center">
      <div className="w-100 h-52 lg:h-72 lg:mb-16">
        <img src={EmptyCartImg} alt="" className="w-100 h-full object-cover" />
        <div className="w-100 flex justify-center py-5">
          <Link to="/Commerce-JS">
            <button className="py-2 px-4 bg-neutral-700 text-white text-sm font-semibold">
              Go to Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
