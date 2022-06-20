/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("RegisterPage", () => {

  it("should trigger a click function", () => {
    const text = "Cadastre-se";
    const onClick = jest.fn();
    render(<button onClick={onClick}>{text}</button>);

    expect(onClick).toHaveBeenCalledTimes(0);
    user.click(screen.getByText(text));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});