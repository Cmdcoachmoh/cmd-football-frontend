import { useAuth } from "@context/AuthContext";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import LanguageSwitcher from "@components/LanguageSwitcher";

// Inside your nav or footer
<LanguageSwitcher />


export default function Layout() {
  const { role } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar role={role} />
      <main className="flex-grow bg-gray-50">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2025 CMD Football — All rights reserved
      </footer>
    </div>
  );
}

