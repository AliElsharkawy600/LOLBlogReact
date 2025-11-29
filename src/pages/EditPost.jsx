import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBlog } from "../hooks/useBlog";
import { CHAMPIONS, ROLES, PATCHES } from "../data/champions";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, updatePost, currentUser } = useBlog();
  const post = posts.find((p) => p.id === parseInt(id));
  const [formData, setFormData] = useState({
    title: "",
    champion: "",
    role: "",
    patch: "",
    content: "",
  });

  useEffect(() => {
    if (post) {
      if (post.author !== currentUser.username) {
        navigate("/");
        return;
      }
      setFormData({
        title: post.title,
        champion: post.champion,
        role: post.role,
        patch: post.patch,
        content: post.content,
      });
    }
  }, [post, currentUser, navigate]);

  if (!post) {
    return (
      <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-gray-900 dark:text-white">Post not found</p>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.champion ||
      !formData.role ||
      !formData.patch ||
      !formData.content
    ) {
      alert("Please fill in all fields");
      return;
    }
    updatePost(post.id, formData);
    navigate(`/post/${post.id}`);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Edit Post
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Post Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Champion
              </label>
              <select
                name="champion"
                value={formData.champion}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {CHAMPIONS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {ROLES.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Patch Version
            </label>
            <select
              name="patch"
              value={formData.patch}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {PATCHES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Content
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="10"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => navigate(`/post/${post.id}`)}
              className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
