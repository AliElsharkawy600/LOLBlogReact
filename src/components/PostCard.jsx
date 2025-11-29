import React from "react";
import { Link } from "react-router-dom";
import { useBlog } from "../hooks/useBlog";

const PostCard = ({ post }) => {
  const { upvotePost } = useBlog();

  return (
    <Link to={`/post/${post.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-5 cursor-pointer h-full">
        <div className="flex justify-between items-start mb-2">
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full font-semibold">
            {post.role}
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-xs">
            {post.patch}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">
            {post.champion}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
          {post.content}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
          <div>
            <p className="font-semibold text-gray-700 dark:text-gray-300">
              {post.author}
            </p>
            <p>{post.date.toLocaleDateString()}</p>
          </div>
          <div className="flex items-center gap-1 text-red-500 font-semibold">
            <span>⬆</span>
            <span>{post.upvotes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
