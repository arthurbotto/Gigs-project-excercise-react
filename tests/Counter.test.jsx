import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../src/components/Counter";

test("render with initial value of 0", () => {
    render(<Counter />)

    expect(screen.getByRole("heading")).toHaveTextContent("0");
})

test("renders with a new value of 2", async () => {
    render(<Counter />)

    await userEvent.click(screen.getByText("Click to increase the counter"))
    await userEvent.click(screen.getByText("Click to increase the counter"))

    expect(screen.getByRole("heading")).toHaveTextContent("2");

})

test("Counter increases to 2 and then decrease to 1", async () => {
    render(<Counter />)

    await userEvent.click(screen.getByText("Click to increase the counter"))
    await userEvent.click(screen.getByText("Click to increase the counter"))

    expect(screen.getByRole("heading")).toHaveTextContent("2");

    await userEvent.click(screen.getByText("Click to decrease the counter"))

    expect(screen.getByRole("heading")).toHaveTextContent("1");

})