import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ onToggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-400">
            ⚔️ LoL Blog
          </Link>

          <div className="hidden md:flex gap-6 items-center">
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link to="/create" className="hover:text-blue-400 transition">
              Create Post
            </Link>
            <Link to="/browse" className="hover:text-blue-400 transition">
              Browse
            </Link>
            <Link to="/about" className="hover:text-blue-400 transition">
              About
            </Link>
            <button
              onClick={onToggleDarkMode}
              className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg transition"
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-gray-700 pt-4">
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link to="/create" className="hover:text-blue-400 transition">
              Create Post
            </Link>
            <Link to="/browse" className="hover:text-blue-400 transition">
              Browse
            </Link>
            <Link to="/about" className="hover:text-blue-400 transition">
              About
            </Link>
            <button
              onClick={onToggleDarkMode}
              className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg transition w-max"
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
