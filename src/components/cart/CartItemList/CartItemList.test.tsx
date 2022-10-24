import { render, screen } from '@testing-library/react';
import CartItemList from './CartItemList';
import { CartContext, CartContextObj, CartContextStartObject } from '../../../store/cart-context';
import CartItem from '../../../models/CartItem';


function renderCartItemListWithContext(cartContextObj: CartContextObj) {
  return render(
    <CartContext.Provider value={cartContextObj}>
      <CartItemList />
    </CartContext.Provider>
  );
}

test('expect list to show items',() => {
  const cartItem = new CartItem(1, "Triangle", 1, 999, "https://someimage.com/image/1241412");
  const cartItem2 = new CartItem(2, "Square", 1, 1000, "https://someimage.com/image/1441412");
  renderCartItemListWithContext({...CartContextStartObject, cartItems: [cartItem, cartItem2]});

  const element = screen.getByText("Triangle");
  expect(element).toBeInTheDocument();
  const element2 = screen.getByText("Square");
  expect(element2).toBeInTheDocument();
})
