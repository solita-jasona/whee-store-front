import { render, screen } from '@testing-library/react';
import Cart from './Cart';
import { CartContext, CartContextObj, CartContextStartObject } from '../../../store/cart-context';
import CartItem from '../../../models/CartItem';


function renderCartWithContext(cartContextObj: CartContextObj) {
  return render(
    <CartContext.Provider value={cartContextObj}>
      <Cart />
    </CartContext.Provider>
  );
}
const cartItem = new CartItem(1, "Triangle", 1, 999, "https://someimage.com/image/1241412");
const cartItem2 = new CartItem(2, "Square", 1, 1000, "https://someimage.com/image/1441412");

test('renders cart title', () => {
  render(<Cart />);
  const titleElements = screen.getAllByText(/Cart/i);
  expect(titleElements[0]).toContainHTML("<h1>Cart</h1>");
});

test('renders "The cart is empty" initially', () => {
  render(<Cart />);
  const outputElement = screen.getByText('The cart is empty', { exact: true });
  expect(outputElement).toBeInTheDocument();
});

test('expect checkout button to be disabled initially', () => {
  render(<Cart />);
  const buttonElement = screen.getByRole('button', {
    name: "Checkout"
  })
  expect(buttonElement.hasAttribute('disabled'));
});

test('expect cart to have items', () => {
  renderCartWithContext({ ...CartContextStartObject, cartItems: [cartItem, cartItem2] });
  const element = screen.getByText("Triangle");
  expect(element).toBeInTheDocument();
})

test('expect checkout button enabled with items', async () => {
  renderCartWithContext({ ...CartContextStartObject, cartItems: [cartItem, cartItem2] });
  const buttonElement = screen.getByRole('button', {
    name: "Checkout"
  })
  expect(!buttonElement.hasAttribute('disabled'));

})
