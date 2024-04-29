import RestaurantCard from "../components/Card";
import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import MOCK_DATA_RESCARDS from "./mocks/restaurantMock.json"

describe("Restaurant card", () => {
    it("should render restaurant cards with props", () => {
        render(<RestaurantCard props={MOCK_DATA_RESCARDS} />);
    });
})