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
})