import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-2 left-0 right-0 w-[80%] h-12 mx-auto bg-gray-900 text-white rounded-full shadow-lg z-50 flex items-center justify-between px-6">
            {/* Logo */}
            <div className="text-white text-2xl font-bold">Structify</div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6">
                <Link to="/Structify/" className="hover:text-orange-400 text-gray-300 transition">Data Structures</Link>
                <Link to="/Structify/" className="hover:text-orange-400 text-gray-300 transition">About</Link>
                <Link to="/Structify/" className="hover:text-orange-400 text-gray-300 transition">Resources</Link>
                <Link to="/Structify/" className="hover:text-orange-400 text-gray-300 transition">Contact</Link>
            </nav>

            {/* Mobile Menu Icon */}
            <button
                aria-label="Toggle Menu"
                className="md:hidden text-white focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-gray-900 p-5 w-48 rounded-lg shadow-lg text-white md:hidden flex flex-col space-y-4">
                    <Link
                        to="/Structify/"
                        className="hover:text-orange-400 text-gray-300 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Data Structures
                    </Link>
                    <Link
                        to="/Structify/"
                        className="hover:text-orange-400 text-gray-300 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/Structify/"
                        className="hover:text-orange-400 text-gray-300 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Resources
                    </Link>
                    <Link
                        to="/Structify/"
                        className="hover:text-orange-400 text-gray-300 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}

export default Header;
