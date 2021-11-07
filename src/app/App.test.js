import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe("logo state management should behave correctly", () => {

  it("logo should start in non-rotating state" , () => {
    render(<App />);
    const logo = screen.getByTestId("logo");
    expect(logo).toHaveClass("spin-counter-clockwise");
    expect(logo).toHaveClass("animation-paused");
  });

  it("logo should rotate after click first and stop rotating after second click", () => {
    render(<App />);
    const logoDiv = screen.getByTestId("logo-container");
    fireEvent.click(logoDiv);
    const logoAfterFirstClick = screen.getByTestId("logo");
    expect(logoAfterFirstClick).not.toHaveClass("animation-paused");

    fireEvent.click(logoDiv);
    const logoAfterSecondClick = screen.getByTestId("logo");
    expect(logoAfterSecondClick).toHaveClass("animation-paused");
  });
});
