import React, { useContext } from 'react';
import ProductList from './components/products/ProductList/ProductList';
import Layout from './components/layout/Layout/Layout';
import { CartContext } from './store/cart-context';
import './App.scss';
import Cart from './components/cart/Cart/Cart';
import Backdrop from './components/layout/Backdrop/Backdrop';

const App = () => {
  const cartCtx = useContext(CartContext)

  const closeCartHandler = () => {
    cartCtx.toggleCart(false);
  }
  
  return (
    <React.Fragment>
      {cartCtx.cartOpen && (
        <React.Fragment>
          <Backdrop onClick={closeCartHandler}/>
          <Cart />
        </React.Fragment>
      )}
      <Layout>
        <ProductList />
      </Layout>
    </React.Fragment>

  );
}

export default App;
