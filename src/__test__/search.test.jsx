import { describe, expect, it, vi } from "vitest";
import MainComponent from "../components/MainComponent";
import { render, act, screen, fireEvent } from "@testing-library/react";
import MOCK_DATA_ALL_RESTAURANTS from "./mocks/allRestaurants.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = vi.fn(() => {
    return {
        json: () => new Promise(resolve => resolve(MOCK_DATA_ALL_RESTAURANTS)),
    }
});

describe("main restaurant body component", () => {
    it("should test the main component has search button", async () => {
        await act(async () => render(
            <BrowserRouter>
                <MainComponent />
            </BrowserRouter>
        ))
        const searchButton = screen.getByText("Search");
        expect(searchButton).toBeInTheDocument();
    });
    it("should test the main component for pizza input", async () => {
        await act(async () => render(
            <BrowserRouter>
                <MainComponent />
            </BrowserRouter>
        ))
        const cardsBeforeSearch = screen.getAllByTestId("test-card");

        expect(cardsBeforeSearch.length).toBe(9);

        const searchButton = screen.getByText("Search");
        const searchInput = screen.getByTestId("search-input");

        expect(searchButton).toBeInTheDocument();

        fireEvent.change(searchInput, { target: { value: "pizza" } });
        fireEvent.click(searchButton);
        const cards = screen.getAllByTestId("test-card");


        expect(cards.length).toBe(2);
    });
    it("should render filtered restarant lists", async () => {
        await act(async () => render(
            <BrowserRouter>
                <MainComponent />
            </BrowserRouter>
        ))

        const cardsBeforeFilter = screen.getAllByTestId("test-card");
        expect(cardsBeforeFilter.length).toBe(9);

        const topRatedRestaurants = screen.getByRole("button", { name: "Top Restaurants" });
        fireEvent.click(topRatedRestaurants);

        const cardsAfterFilter = screen.getAllByTestId("test-card");
        expect(cardsAfterFilter.length).toBe(6);
    })
})