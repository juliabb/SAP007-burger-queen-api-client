'@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// import { LoginPage } from "./index"
import { Login } from "../../components/Login"


describe('Tests for Form Login', () => {
    it('should render one button and two inputs', () => {
        render(<Login />);
        const button = screen.getByText('entrar');
        expect(button).toBeInTheDocument();
    });

});


