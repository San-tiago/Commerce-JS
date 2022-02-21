import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';

function Products({ products, productModal }) {
  return (
    <div className="w-full lg:pl-20">
      <div className="w-full flex space-x-3 text-gray-600 lg:py-8">
        <FontAwesomeIcon
          icon={faSortAmountDownAlt}
          className="text-xl text-gray-600"
        />
        <div className="flex items-center">
          <p className="font-bold text-xs">Sort By</p>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="w-full grid grid-cols-2 py-10 gap-6 sm:px-10 sm:gap-x-12 md:grid-cols-3 md:gap-x-8 md:gap-y-40 lg:py-0  lg:px-0 lg:gap-x-5 ">
        {products.map((product) => (
          <div
            className="max-w-full  md:w-60 md:h-72"
            key={product.id}
            onClick={() => productModal(product)}
          >
            <div className="w-full h-60 py-10 hover:cursor-pointer bg-zinc-100 flex justify-center items-center sm:h-72">
              <img
                src={product.image.url}
                alt=""
                className="max-w-full h-full object-contain"
              />
            </div>
            <div className=" md:grid grid-cols-2">
              <div className=" py-4 text-sm flex flex-col space-y-3 text-neutral-700">
                <p className=" font-semibold">{product.name}</p>

                <span>{product.price.formatted_with_symbol}</span>
              </div>
              {/*  <div className="flex items-center">
                <div className="md:py-4">
                  <div>
                    <p className="text-gray-600 font-semibold text-sm">
                      Colors
                    </p>
                  </div>
                  <div className="flex space-x-3 py-3">
                    <div className="bg-black rounded-full w-4 h-4"></div>
                    <div className="bg-green-700 rounded-full w-4 h-4"></div>
                    <div className="bg-red-500 rounded-full w-4 h-4"></div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default Products;
