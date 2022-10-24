import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import classes from './CartItemList.module.scss';
import { CartContext } from "../../../store/cart-context";

const CartItemList = () => {
  const CartCtx = useContext(CartContext);
  const cartItems = CartCtx.cartItems;
  if (cartItems.length > 0) {
    return (
      <ul className={classes.list}>
        {cartItems.map((item) => {
        return <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          image={item.image}
        />
      })}
      </ul>
    )
  }

  return (
    <p>The cart is empty</p>
  )
  
}

export default CartItemList;