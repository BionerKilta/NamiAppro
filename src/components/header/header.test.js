import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "..";

describe("Header component", () => {
  it("should render", () => {
    render(<Header />);
    const header = screen.queryByTestId("header-bar");
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass("header-bar");
  });

  it("should contain clickable header items", () => {
    render(<Header />);
    const item1 = screen.queryByTestId("header-item-1");
    expect(item1).toBeInTheDocument();
    const item2 = screen.queryByTestId("header-item-2");
    expect(item2).toBeInTheDocument();
  });

  it("should have item-1 selected by default", () => {
    render(<Header />);
    const item1 = screen.queryByTestId("header-item-1");
    expect(item1).toHaveClass("selected");
  });

  it("should move 'selected' class to another item on click", () => {
    render(<Header />);
    const item1BeforeClick = screen.queryByTestId("header-item-1");
    expect(item1BeforeClick).toHaveClass("selected");

    const item2BeforeClick = screen.queryByTestId("header-item-2");
    expect(item2BeforeClick).not.toHaveClass("selected");
    fireEvent.click(item2BeforeClick);

    const item1AfterClick = screen.queryByTestId("header-item-1");
    expect(item1AfterClick).not.toHaveClass("selected");

    const item2AfterClick = screen.queryByTestId("header-item-2");
    expect(item2AfterClick).toHaveClass("selected");
  });
});
