import React from 'react';
import CartProducts from './CartProducts';

function Cart({ cart, removeFromCart, updateCartQty, emptyCart }) {
  return (
    <CartProducts
      cart={cart}
      removeFromCart={removeFromCart}
      updateCartQty={updateCartQty}
      emptyCart={emptyCart}
    />
  );
}

export default Cart;
