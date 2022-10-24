import { useContext, useEffect, useRef, useState } from 'react';
import logo from '../../../images/logo.png';
import cartIcon from '../../../images/cart-icon.png';
import { CartContext } from '../../../store/cart-context';
import classes from './Header.module.scss';

const Header = () => {
  const cartCtx = useContext(CartContext);
  const [showCartUpdate, setShowCartUpdate] = useState(false);
  const initialState = useRef(true);
  useEffect(() => {
    if (initialState.current === false && !cartCtx.cartOpen) {
      setShowCartUpdate(true);
      const timeOut = setTimeout(() => {
        setShowCartUpdate(false);
      }, 1000)

      return (() => {
        clearTimeout(timeOut);
      })
    }
    if (initialState.current === true) {
      initialState.current = false;
    }

  }, [cartCtx.cartItems])

  const openCartHandler = () => {
    cartCtx.toggleCart(true);
  }

  return (
    <div className={classes.header}>
      <div className={classes.headerInner}>
        <div className={classes.leftContainer}>
          <img src={logo} alt="logo" />
          <div className={classes.headerText}>
            The most definitive shape store in the world.
          </div>
        </div>
        <div className={classes.cartContainer}>
          {showCartUpdate &&
            <div className={classes.cartUpdate}>Cart has been updated!</div>
          }

          <span>{cartCtx.cartTotalQuantity} 
          {cartCtx.cartTotalQuantity === 1 && <span> item in Cart</span>}
          {cartCtx.cartTotalQuantity !== 1 && <span> items in Cart</span>}
          </span>
          <img src={cartIcon} alt="Cart icon" onClick={openCartHandler} />
        </div>
      </div>
    </div>
  )
}

export default Header;