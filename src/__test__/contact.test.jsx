import { describe, expect, it } from "vitest";
import Contact from "../components/Contact";
import { render, screen } from "@testing-library/react";

describe('Contact', () => {
    it('renders contact component', () => {
        render(<Contact />);
        expect(screen.getByRole('heading')).toHaveTextContent('Contact Us');
    });
    it("searches for the contact button", () => {
        render(<Contact />);
        expect(screen.getByText('Send Message')).toBeInTheDocument();
    });
    it("checks for input id", () => {
        render(<Contact />);
        expect(screen.getByLabelText('Name')).toHaveAttribute('id', 'user-name');
    });
    it("searches for input boxes", () => {
        render(<Contact />);
        expect(screen.getAllByRole('textbox').length).toBe(3);
    });

});