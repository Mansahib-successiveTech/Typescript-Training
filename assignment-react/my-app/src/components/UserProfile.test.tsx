// UserProfile.test.js

import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

describe("UserProfile Component", () => {
  const userData = {
    name: "Sahib Singh",
    email: "sahib@example.com",
    phone: "9876543210",
  };
  beforeEach(() => {
    render(<UserProfile {...userData} />);
  });
  it("renders the user's name", () => {
    expect(screen.getByText("Name: Sahib Singh")).toBeInTheDocument();
  });

  it("renders the user's email", () => {
    expect(screen.getByText("Email: sahib@example.com")).toBeInTheDocument();
  });

  it("renders the user's phone number", () => {
    expect(screen.getByText("Phone: 9876543210")).toBeInTheDocument();
  });

  it("renders the heading 'User Profile'", () => {
    expect(
      screen.getByRole("heading", { name: "User Profile" })
    ).toBeInTheDocument();
  });
});
