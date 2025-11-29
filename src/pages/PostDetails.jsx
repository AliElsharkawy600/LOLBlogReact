import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useBlog } from "../hooks/useBlog";
import CommentSection from "../components/CommentSection";

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, upvotePost, deletePost, currentUser } = useBlog();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Post not found
          </h1>
          <Link
            to="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(post.id);
      navigate("/");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link
          to="/"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block"
        >
          ← Back to posts
        </Link>

        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                {post.title}
              </h1>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-semibold">
                  {post.champion}
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                  {post.role}
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                  Patch {post.patch}
                </span>
              </div>
            </div>
            {currentUser.username === post.author && (
              <div className="flex gap-2">
                <Link
                  to={`/edit/${post.id}`}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Edit
                </Link>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Delete
                </button>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center text-gray-600 dark:text-gray-400 mb-6 pb-6 border-b border-gray-300 dark:border-gray-600">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                {post.author}
              </p>
              <p className="text-sm">{post.date.toLocaleDateString()}</p>
            </div>
            <button
              onClick={() => upvotePost(post.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                post.userUpvoted
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-red-600 hover:text-white"
              }`}
            >
              <span>⬆</span>
              <span>{post.upvotes}</span>
            </button>
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap text-lg leading-relaxed">
              {post.content}
            </p>
          </div>

          <CommentSection postId={post.id} comments={post.comments} />
        </article>
      </div>
    </div>
  );
};

export default PostDetails;
