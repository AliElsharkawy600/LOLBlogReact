import React, { useState, useMemo } from "react";
import { useBlog } from "../hooks/useBlog";
import PostCard from "../components/PostCard";
import FilterBar from "../components/FilterBar";

const Home = () => {
  const { posts } = useBlog();
  const [filters, setFilters] = useState({
    champion: "",
    role: "",
    patch: "",
    sortBy: "newest",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAndSortedPosts = useMemo(() => {
    let result = posts.filter((post) => {
      const matchesChampion =
        !filters.champion || post.champion === filters.champion;
      const matchesRole = !filters.role || post.role === filters.role;
      const matchesPatch = !filters.patch || post.patch === filters.patch;
      const matchesSearch =
        !searchTerm ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesChampion && matchesRole && matchesPatch && matchesSearch;
    });

    result.sort((a, b) => {
      if (filters.sortBy === "newest") return b.date - a.date;
      if (filters.sortBy === "oldest") return a.date - b.date;
      if (filters.sortBy === "upvotes") return b.upvotes - a.upvotes;
      return 0;
    });

    return result;
  }, [posts, filters, searchTerm]);

  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            League of Legends Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Share guides, builds, and strategies with the community
          </p>
        </div>

        <FilterBar
          filters={filters}
          onFilterChange={setFilters}
          onSearch={setSearchTerm}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedPosts.length > 0 ? (
            filteredAndSortedPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No posts found. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
