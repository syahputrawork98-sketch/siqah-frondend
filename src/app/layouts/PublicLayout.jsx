import { Outlet } from "react-router-dom";
import Footer from "@/features/public/ui/Footer";
import Navbar from "@/features/public/ui/Navbar";

export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

