import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "@context/AuthContext";
import PrivateRoute from "@route/PrivateRoute";

// 🧪 Dummy components for testing
const Protected = () => <div>Protected Content</div>;
const Login = () => <div>Login Page</div>;

describe("PrivateRoute", () => {
  it("redirects to login when user is not authenticated", () => {
    render(
      <AuthProvider>
        <MemoryRouter initialEntries={["/protected"]}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute allowedRoles={[]} children={undefined} />}>
              <Route path="/protected" element={<Protected />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </AuthProvider>
    );

    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });

  it("renders protected content when user is authenticated", () => {
    // 🧪 Mock localStorage token
    localStorage.setItem("token", "mock-token");

    render(
      <AuthProvider>
        <MemoryRouter initialEntries={["/protected"]}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute allowedRoles={[]} children={undefined} />}>
              <Route path="/protected" element={<Protected />} />
            </Route>
          </Routes>
        </MemoryRouter>
      </AuthProvider>
    );

    expect(screen.getByText("Protected Content")).toBeInTheDocument();

    // 🧹 Clean up
    localStorage.removeItem("token");
  });
});
