import ProductList from "./ProductList";
import { render, screen } from '@testing-library/react';

test("renders list items", async () => {
  await render(<ProductList />);
  const triangleElement =  await screen.findByText("triangle");
  expect(triangleElement).toBeInTheDocument();
  const squareElement = await screen.findByText("rectangle");
  expect(squareElement).toBeInTheDocument();
  const circleElement = await screen.findByText("circle");
  expect(circleElement).toBeInTheDocument();
})