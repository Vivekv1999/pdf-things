import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { allTools } from "../Tools/AllTools";

const Navbar = () => {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <header className="top-0 z-50 sticky bg-white shadow border-b">
            <nav className="flex justify-between items-center mx-auto px-4 py-3 max-w-7xl">
                <Link to="/" className="font-bold text-indigo-600 text-2xl tracking-tight">
                    PDFTools
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    {allTools.slice(0, 5).map(({ path, name }) => (
                        <Link
                            key={path}
                            to={path}
                            className={`text-sm font-medium px-2 py-1 rounded transition-colors duration-200 ${location.pathname === path ? "text-indigo-600 bg-indigo-50" : "text-gray-600 hover:text-indigo-600 hover:bg-gray-100"}`}
                        >
                            {name}
                        </Link>
                    ))}
                </div>

                <button className="md:hidden hover:bg-gray-100 p-2 rounded" onClick={() => setMobileOpen(!mobileOpen)}>
                    <Menu className="w-6 h-6 text-gray-700" />
                </button>
            </nav>

            {mobileOpen && (
                <div className="md:hidden bg-white px-4 pb-4 border-t">
                    {allTools.slice(0, 5).map(({ path, name }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => setMobileOpen(false)}
                            className={`block py-2 px-2 rounded text-sm font-medium transition ${location.pathname === path ? "text-indigo-600 bg-indigo-50" : "text-gray-700 hover:bg-gray-100"}`}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}

export default Navbar
