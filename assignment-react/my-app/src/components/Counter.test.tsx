import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Count from "./Counter";

describe("Count component (user-event)", () => {
  it("should render with initial count as 0", () => {
    render(<Count />);
    const display = screen.getByText(/count:/i);
    expect(display).toHaveTextContent("count:0");
  });

  it("should increment the count when Increase button is clicked", async () => {
    render(<Count />);
    const incBtn = screen.getByText(/increase/i);
    const display = screen.getByText(/count:/i);

    await userEvent.click(incBtn);
    expect(display).toHaveTextContent("count:1");
  });

  it("should decrement the count when Decrease button is clicked", async () => {
    render(<Count />);
    const incBtn = screen.getByText(/increase/i);
    const decBtn = screen.getByText(/decrease/i);
    const display = screen.getByText(/count:/i);

    await userEvent.click(incBtn); // count:1
    await userEvent.click(decBtn); // count:0
    expect(display).toHaveTextContent("count:0");
  });
});
