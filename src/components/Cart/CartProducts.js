import React from 'react';
import { useEffect, useState } from 'react';
import EmptyCart from './EmptyCart';

function CartProducts({ cart, removeFromCart, updateCartQty, emptyCart }) {
  /*   const [loading, setLoading] = useState(false);
   */
  return (
    <div className="w-full px-4 sm:px-10 md:grid grid-cols-8 md:px-10 lg:px-10">
      {cart.line_items.length > 0 ? (
        <div className="w-full h-auto grid grid-cols-2 py-10 gap-6 sm:px-10 sm:gap-x-12 md:px-2 md:col-span-5 md:gap-x-5 md:gap-y-40 lg:grid-cols-3 lg:col-span-6 lg:gap-x-5 lg:px-10">
          {cart.line_items.map((product) => (
            <div className="max-w-full  md:w-60 md:h-72" key={product.id}>
              <div className="w-full relative h-60 py-10 hover:cursor-pointer bg-zinc-100 flex justify-center items-center sm:h-72">
                <img
                  src={product.image.url}
                  alt=""
                  className="max-w-full h-full object-contain"
                />
                <div
                  className="absolute top-4 right-4 h-7 w-7 cursor-pointer flex justify-center items-center bg-neutral-400 rounded-full"
                  onClick={() => removeFromCart(product.id)}
                >
                  <button className="text-white text-lg">X</button>
                </div>
              </div>
              <div className=" md:grid grid-cols-2">
                <div className=" py-4 text-sm flex flex-col space-y-1 text-neutral-700">
                  <p className=" font-semibold">{product.name}</p>
                  <span>{product.line_total.formatted_with_symbol}</span>
                </div>
              </div>
              <div className="w-100 py-1 space-y-1">
                <div className="text-neutral-700 text-sm">
                  <p>Quantity</p>
                </div>
                <div className="flex w-100">
                  <div className="flex space-x-5">
                    <button
                      className="bg-neutral-300 px-2 font-bold text-center"
                      onClick={() =>
                        updateCartQty(product.id, product.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <div>
                      <p>{product.quantity}</p>
                    </div>
                    <button
                      className="bg-neutral-300 px-2 font-bold text-center"
                      onClick={() =>
                        updateCartQty(product.id, product.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyCart />
      )}
      {cart.line_items.length > 0 ? (
        <div className="w-100 py-10 md:col-span-3 md:px-4 lg:col-span-2 lg:px-0">
          <div className="w-100  border border-1 space-y-3 py-14 rounded-lg">
            <div className="w-100 flex text-sm text-neutral-700 font-semibold justify-between px-6 sm:px-14 md:px-5">
              <p>Total Item(s):</p>
              <p>{cart.total_items}</p>
            </div>
            <div className="w-100 flex text-sm text-neutral-700 font-semibold justify-between px-6 sm:px-14 md:px-5">
              <p>Total Uniqe Item(s):</p>
              <p>{cart.total_unique_items}</p>
            </div>
            <div className="w-100 flex text-xl text-neutral-700 font-semibold justify-between px-6 sm:px-14 md:px-5">
              <p>Total:</p>
              <p>{cart.subtotal.formatted_with_symbol}</p>
            </div>
            <div className="w-100 pt-5 space-y-1 flex flex-col  text-neutral-700 font-semibold justify-between px-6 sm:px-14 md:px-5">
              <button className="w-100 py-3 px-4 uppercase bg-neutral-700 tracking-widest text-white text-xs font-semibold">
                check out
              </button>
              <button
                className="w-100 py-3 px-4 tracking-widest uppercase bg-neutral-500 text-white text-xs font-semibold hover:bg-neutral-700 hover:text-white"
                onClick={() => emptyCart()}
              >
                Remove All
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CartProducts;
