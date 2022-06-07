/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("Login", () => {

      it("should trigger a click function", () => {
      const text = "Entrar";
      const onClick = jest.fn();
      render(<button onClick={onClick}>{text}</button>);
  
      expect(onClick).toHaveBeenCalledTimes(0);
      user.click(screen.getByText(text));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });





