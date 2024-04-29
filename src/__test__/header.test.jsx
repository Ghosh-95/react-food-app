import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect } from "vitest";
import Header from "../components/Header"
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header component", () => {
    it("should render header component with a login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const button = screen.getByText('LogIn');
        expect(button).toBeInTheDocument();

        const cartItem = screen.getByText(/Cart/);
        expect(cartItem).toBeInTheDocument();
    });
    it("should change the login button to logout button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByText('LogIn');

        fireEvent.click(loginButton);

        const logoutButton = screen.getByText('Log Out');

        expect(loginButton).toBeInTheDocument();
    });
})