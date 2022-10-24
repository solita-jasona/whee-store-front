import { render, screen } from '@testing-library/react';
import Backdrop from './Backdrop';

const onClickHandler = jest.fn();

test("backdrop renders", () => {
  render(<Backdrop onClick={onClickHandler} />)
  const elements = screen.getAllByRole("generic");
  expect(elements.length === 1)
})

