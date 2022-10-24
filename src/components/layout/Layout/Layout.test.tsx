import Layout from "./Layout";
import { render, screen } from '@testing-library/react';

test('layout renders with children', () => {
  render(<Layout><div>children</div></Layout>)
  const element = screen.getByText("children");
  expect(element).toBeInTheDocument();
})

test('layout renders header', () => {
  render(<Layout><div>children</div></Layout>)
  const element = screen.getByText("The most definitive shape store in the world.");
  expect(element).toBeInTheDocument();
})

