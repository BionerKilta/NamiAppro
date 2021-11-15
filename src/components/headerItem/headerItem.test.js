import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeaderItem } from "..";

describe("HeaderItem component", () => {
  it("should render", () => {
    render(<HeaderItem data_testid="test" />);
    const element = screen.queryByTestId("test");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("header-item");
  });

  it("should call callback with id prop", () => {
    const mockFn = jest.fn();
    render(
      <HeaderItem
        onClick={mockFn}
        id="some_id"
        data_testid="test2"
      />
    );
    const element = screen.queryByTestId("test2");
    expect(mockFn).toHaveBeenCalledTimes(0);
    fireEvent.click(element);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith("some_id");
  })
});
