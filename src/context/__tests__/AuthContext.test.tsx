import { render, screen, fireEvent } from "@testing-library/react";
import { AuthProvider, useAuth } from "../AuthContext";
import { expect, test } from "vitest";

function TestComponent() {
  const { role, setRole } = useAuth();
  return (
    <div>
      <span data-testid="role">{role}</span>
      <button onClick={() => setRole("coach")}>Set Coach</button>
    </div>
  );
}

test("AuthContext provides default role", () => {
  render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  );
  expect(screen.getByTestId("role").textContent).toBe("guest");
});

test("AuthContext updates role to coach", () => {
  render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  );
  fireEvent.click(screen.getByText("Set Coach"));
  expect(screen.getByTestId("role").textContent).toBe("coach");
});
