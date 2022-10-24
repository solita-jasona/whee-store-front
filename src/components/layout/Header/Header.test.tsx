import { render, screen } from '@testing-library/react';
import Header from './Header';
import { CartContext, CartContextObj, CartContextStartObject } from "../../../store/cart-context";

const renderHeaderWithContext = (cartContextObj: CartContextObj) => {
  return render(
    <CartContext.Provider value={cartContextObj}>
      <Header />
    </CartContext.Provider>
  );
}

test('header renders', () => {
  render(<Header />)
  const element = screen.getByText("The most definitive shape store in the world.");
  expect(element).toBeInTheDocument();
})

test('header renders amount in cart', () => {
  renderHeaderWithContext({...CartContextStartObject, cartTotalQuantity : 533})
  const element = screen.getByText("533", {exact: false});
  expect(element).toBeInTheDocument();
})