import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./counter";

/**
 * Mock InnerElement so we only test Counter behavior
 */
jest.mock("./innerElement", () => ({
  __esModule: true,
  default: ({ count }: { count: number }) => (
    <div data-testid="inner-element">Count: {count}</div>
  ),
}));

describe("Counter component", () => {
  it("renders with initial count as 0", () => {
    render(<Counter />);

    expect(screen.getByText("Increment")).toBeInTheDocument();
    expect(screen.getByTestId("inner-element")).toHaveTextContent("Count: 0");
  });

  it("increments count when button is clicked", () => {
    render(<Counter />);

    const button = screen.getByText("Increment");

    fireEvent.click(button);
    expect(screen.getByTestId("inner-element")).toHaveTextContent("Count: 1");

    fireEvent.click(button);
    expect(screen.getByTestId("inner-element")).toHaveTextContent("Count: 2");
  });
});
