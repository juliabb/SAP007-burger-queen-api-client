/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Imagem from "../../components/Logo";

  describe("<Imagem />", () => {
    it("Renders the logo correctly", () => {
      render(<Imagem/>);
      const logo= screen.getByRole("img");
      expect(logo).toBeInTheDocument();
    });
  });