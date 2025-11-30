import { NavLink } from "react-router-dom";
import { useState } from "react";

// Example: role could come from auth context, Redux, or props
type UserRole = "coach" | "parent" | "player" | "guest";

export default function Navbar({ role = "guest" }: { role?: UserRole }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", roles: ["guest", "coach", "parent", "player"] },
    { path: "/dashboard", label: "Dashboard", roles: ["coach", "player"] },
    { path: "/players", label: "Players", roles: ["coach", "player"] },
    { path: "/coach-dashboard", label: "Coach", roles: ["coach"] },
    { path: "/parent-portal", label: "Parents", roles: ["parent"] },
    { path: "/progress-chart", label: "Progress", roles: ["coach", "player"] },
    { path: "/drill-builder", label: "Drills", roles: ["coach"] },
    { path: "/exam-entry", label: "Exams", roles: ["coach", "player"] },
    { path: "/team-report", label: "Reports", roles: ["coach", "parent"] }
  ];

  const visibleItems = navItems.filter(item => item.roles.includes(role));

  return (
    <nav className="bg-indigo-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          CMD Football
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          {visibleItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-yellow-300 transition ${
                  isActive ? "border-b-2 border-yellow-400" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-indigo-800 px-4 py-2 space-y-2">
          {visibleItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 hover:text-yellow-300 transition ${
                  isActive ? "font-bold text-yellow-400" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
