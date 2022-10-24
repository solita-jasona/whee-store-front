import { render, screen } from '@testing-library/react';
import CartItem from './CartItem';
import Triangle from '../../../images/triangle.png';

const item = {
  id: 1,
  name: "Triangle",
  price: 999,
  quantity: 43,
  image: Triangle
}

const renderElement = () => {
  render(<CartItem
    id={item.id}
    name={item.name}
    price={item.price}
    quantity={item.quantity}
    image={item.image}
  />
  );
}

test("Cart item renders with correct name", async () => {
  await renderElement();
  const element = await screen.findByText("Triangle", {exact: false});
  expect(element).toBeInTheDocument();
})

test("Cart item renders with correct quantity", async () => {
  await renderElement();
  const element = await screen.findByText("quantity: 43", {exact: false});
  expect(element).toBeInTheDocument();
})

test("Cart item renders with correct price", async () => {
  await renderElement();
  const element = await screen.findByText("999 €", {exact: false});
  expect(element).toBeInTheDocument();
})
