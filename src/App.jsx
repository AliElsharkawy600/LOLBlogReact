import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./context/BlogContext";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Browse from "./pages/Browse";
import About from "./pages/About";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <BlogProvider>
        <Router>
          <Navigation
            onToggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
          />
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<PostDetails />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/edit/:id" element={<EditPost />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </BlogProvider>
    </div>
  );
}

export default App;
