import React, { useState } from "react";
import { useBlog } from "../hooks/useBlog";

const CommentSection = ({ postId, comments }) => {
  const [commentText, setCommentText] = useState("");
  const { addComment, currentUser } = useBlog();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      addComment(postId, {
        username: currentUser.username,
        text: commentText,
        timestamp: new Date(),
      });
      setCommentText("");
    }
  };

  return (
    <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Comments
      </h3>

      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Share your thoughts..."
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows="3"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No comments yet. Be the first!
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
            >
              <div className="flex justify-between mb-2">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {comment.username}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {comment.timestamp.toLocaleString()}
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{comment.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
