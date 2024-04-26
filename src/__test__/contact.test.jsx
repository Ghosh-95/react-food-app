import { describe, expect, it, test } from "vitest";
import Contact from "../components/Contact";
import { render, screen } from "@testing-library/react";

test('component renders', () => {
    render(<Contact />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
})