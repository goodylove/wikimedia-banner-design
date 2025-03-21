import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

import { CurrentMood } from "./constant/data";

// Mock CurrentMood data (assuming it follows a specific structure)
jest.mock("./constant/data", () => ({
  CurrentMood: {
    Thankful: {
      bg: "/thankful.jpg",
      text: "Gratitude fills my heart! 🙏",
      animation: "animate-fade",
    },
    Blessed: {
      bg: "/blessed.jpg",
      text: "I am truly blessed! ✨",
      animation: "animate-bounce",
    },
    Lioness: {
      bg: "/lonliness.jpg",
      text: "Strong and fearless! 🦁",
      animation: "animate-pulse",
    },
    Creativity: {
      bg: "/creativity.jpg",
      text: "Let your imagination run wild! 🎨",
      animation: "animate-fade",
    },
  },
}));

describe("App Component", () => {
  // test("renders with default mood", () => {
  //   render(<App />);

  //   expect(screen.getByText(/Gratitude fills my heart/i)).toBeInTheDocument();

  //   const banner = screen.getByTestId("banner");
  //   expect(banner).toHaveStyle(`background-image: url('/thankful.jpg')`);
  // });

  test("updates mood when a new mood is selected", () => {
    render(<App />);

    // Select dropdown element
    const select = screen.getAllByRole("combobox");

    // Select a different mood (Happy)
    fireEvent.change(select);

    // Verify that the displayed mood updates
    expect(screen.getByText(/So happy today!/i)).toBeInTheDocument();

    // Check if the background image updates correctly
    const banner = screen.getByTestId("banner");
    expect(banner).toHaveStyle(`background-image: url('/happy.jpg')`);
  });
});
