import { render, screen } from "@testing-library/react";
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
    });
})