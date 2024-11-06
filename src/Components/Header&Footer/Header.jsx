import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for the menu

function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

    return (
        <header className="w-full flex items-center justify-between p-5 bg-gray-800 shadow-lg z-10">
            {/* Logo */}
            <div className="text-orange-500 text-3xl font-bold">Structify</div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6 text-cyan-300">
                <Link to="/Structify/" className="hover:text-orange-500">Data Structures</Link>
                <Link to="/Structify/" className="hover:text-orange-500">About</Link>
                <Link to="/Structify/" className="hover:text-orange-500">Resources</Link>
                <Link to="/Structify/" className="hover:text-orange-500">Contact</Link>
            </nav>

            {/* Mobile Menu Icon */}
            <div className="md:hidden text-cyan-300 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <nav className="absolute top-16 right-0 bg-gray-800 p-5 w-48 rounded-lg shadow-lg text-cyan-300 md:hidden flex flex-col space-y-4">
                    <Link to="/Structify/" className="hover:text-orange-500" onClick={() => setMenuOpen(false)}>Data Structures</Link>
                    <Link to="/Structify/" className="hover:text-orange-500" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/Structify/" className="hover:text-orange-500" onClick={() => setMenuOpen(false)}>Resources</Link>
                    <Link to="/Structify/" className="hover:text-orange-500" onClick={() => setMenuOpen(false)}>Contact</Link>
                </nav>
            )}
        </header>
    );
}

export default Header;
