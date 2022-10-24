import ProductItem from './ProductItem';
import { render, screen } from '@testing-library/react';

const product = {
  id: 3,
  name: "triangle",
  price: 1009,
  description: "A true classic with three elegant corners",
  image: "https://someimage.com/image/124312423423"
};

test("product item renders with props", () => {
  render(<ProductItem
    id={product.id}
    name={product.name}
    price={product.price}
    description={product.description}
    image={product.image}
  />
  )

  const descElement = screen.getByText(product.description);
  expect(descElement).toBeInTheDocument();
  const nameElement = screen.getByText(product.name);
  expect(nameElement).toBeInTheDocument();
  const priceElement = screen.getByText(product.price + " €");
  expect(priceElement).toBeInTheDocument();
})