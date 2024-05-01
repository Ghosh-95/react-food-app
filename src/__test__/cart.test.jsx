import { render, screen, act, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Cart from "../components/Cart.jsx";
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js"
import { BrowserRouter } from "react-router-dom";
import MOCK_MENU_DATA from "./mocks/mockMenuLists.json";
import ResMenu from "../components/ResMenu.jsx";
import Header from '../components/Header.jsx';

global.fetch = vi.fn(() => {
    return {
        json: () => new Promise(resolve => resolve(MOCK_MENU_DATA))
    }
})

describe("Testing flows of Cart Component", () => {
    it("should render the Cart component", async () => {
        await act(async () =>
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                        <ResMenu />
                        <Cart />
                    </Provider>
                </BrowserRouter>
            ))

        const header = screen.getByRole('heading', { name: "Recommended (11)" });
        expect(header).toHaveTextContent('Recommended');

        const anotherCategory = screen.getByRole("heading", { name: "100 ML Ice Cream Cups (Serve 1) (12)" });
        fireEvent.click(anotherCategory);
        expect(anotherCategory).toBeInTheDocument();

        const foodItems = screen.getAllByTestId("food-item");
        expect(foodItems.length).toBe(12);

        const addButons = screen.getAllByRole("button", { name: "Add" });
        expect(addButons.length).toBe(12);
        fireEvent.click(addButons[0]);
        fireEvent.click(addButons[1]);
        expect(screen.getByTestId("cart-item")).toHaveTextContent("Cart (2)");

        expect(screen.getAllByTestId("cart-food-item").length).toBe(2);

        fireEvent.click(screen.getByText("Clear Cart"));

        expect(screen.getByText("Your cart is empty! Please add items to cart")).toBeInTheDocument();
    });
})