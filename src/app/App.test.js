import { render, screen, fireEvent, createEvent } from '@testing-library/react';
import App from './App';

// test does not work
test('test logo rotation', () => {
  render(<App />);
  const logoDiv = screen.getByTestId("logo-container");
  const logo = screen.getByTestId("logo");
  
  expect(logo).toHaveClass("spin-counter-clockwise");
  expect(logo).toHaveClass("animation-paused");

  fireEvent(logoDiv, new MouseEvent("click"));

  expect(logo).not.toHaveClass("animation-paused");
});
