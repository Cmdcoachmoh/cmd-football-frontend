import { render, screen, fireEvent } from "@testing-library/react";
import LanguageSwitcher from "../LanguageSwitcher";
import { expect, vi, test } from "vitest";

// Mock i18n
const mockChangeLanguage = vi.fn();

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: mockChangeLanguage
    }
  })
}));

test("renders EN and FR buttons", () => {
  render(<LanguageSwitcher />);
  expect(screen.getByText("EN")).toBeInTheDocument();
  expect(screen.getByText("FR")).toBeInTheDocument();
});

test("clicking EN calls changeLanguage with 'en'", () => {
  render(<LanguageSwitcher />);
  fireEvent.click(screen.getByText("EN"));
  expect(mockChangeLanguage).toHaveBeenCalledWith("en");
});

test("clicking FR calls changeLanguage with 'fr'", () => {
  render(<LanguageSwitcher />);
  fireEvent.click(screen.getByText("FR"));
  expect(mockChangeLanguage).toHaveBeenCalledWith("fr");
});
