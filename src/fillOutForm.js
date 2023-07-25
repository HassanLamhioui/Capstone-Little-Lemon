import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Form from "../src/components/BookingForm.js";

// Helper function to fill out the form fields
const fillOutForm = () => {
  fireEvent.change(screen.getByPlaceholderText("First Name"), {
    target: { value: "John" },
  });

  fireEvent.change(screen.getByPlaceholderText("Last Name"), {
    target: { value: "Doe" },
  });

  fireEvent.change(screen.getByPlaceholderText("text@example.com"), {
    target: { value: "john.doe@example.com" },
  });

  fireEvent.change(screen.getByPlaceholderText("Phone number"), {
    target: { value: "123-456-7890" },
  });

  fireEvent.change(screen.getByPlaceholderText("Select occasion"), {
    target: { value: "Birthday" },
  });

  fireEvent.change(screen.getByPlaceholderText("2"), {
    target: { value: "4" },
  });

  fireEvent.change(screen.getByLabelText("Date & Time"), {
    target: { value: "2023-07-25T12:00" },
  });
};

describe("Form", () => {
  test("renders all form fields and handles form submission", async () => {
    render(<Form />);

    // Check if all form fields are rendered
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Telephone (XXX-XXX-XXXX)")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion (optional)")).toBeInTheDocument();
    expect(screen.getByLabelText("Guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Date & Time")).toBeInTheDocument();

    // Fill out the form
    fillOutForm();

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: "Reserve" }));

    // Wait for the confirmation modal to appear
    await waitFor(() => {
      expect(
        screen.getByText("Your booking has been confirmed! Check your email for details.")
      ).toBeInTheDocument();
    });

    // Check if the form is reset after submission
    expect(screen.getByPlaceholderText("First Name").value).toBe("");
    expect(screen.getByPlaceholderText("Last Name").value).toBe("");
    expect(screen.getByPlaceholderText("text@example.com").value).toBe("");
    expect(screen.getByPlaceholderText("Phone number").value).toBe("");
    expect(screen.getByPlaceholderText("Select occasion").value).toBe("");
    expect(screen.getByPlaceholderText("2").value).toBe("");
    expect(screen.getByLabelText("Date & Time").value).toBe("");

    // Check if the confirmation modal is displayed
    expect(
      screen.getByText("Your booking has been confirmed! Check your email for details.")
    ).toBeInTheDocument();
  });

  test("shows validation errors for required fields", async () => {
    render(<Form />);

    // Submit the form without filling out any fields
    fireEvent.click(screen.getByRole("button", { name: "Reserve" }));

    // Wait for the validation errors to appear
    await waitFor(() => {
      expect(screen.getByText("First name is a required field!")).toBeInTheDocument();
      expect(screen.getByText("Last name is a required field!")).toBeInTheDocument();
      expect(screen.getByText("Email is a required field!")).toBeInTheDocument();
      expect(screen.getByText("Telephone is a required field!")).toBeInTheDocument();
      expect(screen.getByText("Please specify the number of guests per table!")).toBeInTheDocument();
      expect(screen.getByText("Please select date and time!")).toBeInTheDocument();
    });
  });
});
