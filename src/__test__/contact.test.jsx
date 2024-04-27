import { describe, expect, it } from "vitest";
import Contact from "../components/Contact";
import { render, screen } from "@testing-library/react";

describe('Contact', () => {
    it('renders contact component', () => {
        render(<Contact />);
        expect(screen.getByRole('heading')).toHaveTextContent('Contact Us');
    })
})