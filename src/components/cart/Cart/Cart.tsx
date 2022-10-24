import CartItemList from '../CartItemList/CartItemList';
import { CartContext } from '../../../store/cart-context';
import classes from './Cart.module.scss';
import { useContext } from 'react';

//TODO use context to store/add/remove items from cart
const Cart = () => {
  const CartCtx = useContext(CartContext);

  const closeCartHandler = () => {
    CartCtx.toggleCart(false);
  }
  return (
    <div className={classes.cart}>
      <div className={classes.cartHeader}>
        <h1>Cart</h1>
      </div>
      <div className={classes.itemsContainer}> 
        <CartItemList />
      </div>
      <div className={classes.summaryContainer}>
        <div className={classes.totals}>
          <div>
            Total Quantity: <span>{CartCtx.cartTotalQuantity}</span>
          </div>
          <div>
            Total Price: <span>{CartCtx.cartTotalPrice} €</span>
          </div>
        </div>
        <div className={classes.buttons}>
          <button disabled={CartCtx.cartItems.length === 0} >Checkout</button>
          <button onClick={closeCartHandler}>Cancel</button>
        </div>
        
        
      </div>
    </div>
  )
}

export default Cart;