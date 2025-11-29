import React, { createContext, useState, useCallback } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Master Garen Top Lane - Complete Guide",
      champion: "Garen",
      role: "Top",
      patch: "14.2",
      author: "ProPlayer123",
      date: new Date("2024-01-15"),
      content:
        "Garen is one of the best top laners in the current meta. Here's everything you need to know...",
      upvotes: 245,
      userUpvoted: false,
      comments: [
        {
          id: 1,
          username: "User456",
          text: "Great guide!",
          timestamp: new Date("2024-01-15T10:30:00"),
        },
      ],
    },
    {
      id: 2,
      title: "Jungle Pathing in Patch 14.2",
      champion: "Lee Sin",
      role: "Jungle",
      patch: "14.2",
      author: "JungleKing",
      date: new Date("2024-01-14"),
      content:
        "New jungle changes require adaptive pathing. Learn the optimal routes...",
      upvotes: 189,
      userUpvoted: false,
      comments: [],
    },
    {
      id: 3,
      title: "Lux Mid Lane Build Optimization",
      champion: "Lux",
      role: "Mid",
      patch: "14.1",
      author: "MidMaster",
      date: new Date("2024-01-10"),
      content:
        "Discover the most efficient itemization for maximum damage output...",
      upvotes: 312,
      userUpvoted: false,
      comments: [],
    },
  ]);

  const [currentUser] = useState({ id: 1, username: "CurrentUser" });

  const addPost = useCallback(
    (post) => {
      const newPost = {
        ...post,
        id: Math.max(...posts.map((p) => p.id), 0) + 1,
        date: new Date(),
        upvotes: 0,
        userUpvoted: false,
        comments: [],
      };
      setPosts([newPost, ...posts]);
      return newPost;
    },
    [posts]
  );

  const updatePost = useCallback(
    (id, updatedPost) => {
      setPosts(posts.map((p) => (p.id === id ? { ...p, ...updatedPost } : p)));
    },
    [posts]
  );

  const deletePost = useCallback(
    (id) => {
      setPosts(posts.filter((p) => p.id !== id));
    },
    [posts]
  );

  const addComment = useCallback(
    (postId, comment) => {
      setPosts(
        posts.map((p) =>
          p.id === postId
            ? {
                ...p,
                comments: [
                  ...p.comments,
                  {
                    ...comment,
                    id: Math.max(...p.comments.map((c) => c.id || 0), 0) + 1,
                  },
                ],
              }
            : p
        )
      );
    },
    [posts]
  );

  const upvotePost = useCallback(
    (id) => {
      setPosts(
        posts.map((p) =>
          p.id === id
            ? {
                ...p,
                upvotes: p.userUpvoted ? p.upvotes - 1 : p.upvotes + 1,
                userUpvoted: !p.userUpvoted,
              }
            : p
        )
      );
    },
    [posts]
  );

  return (
    <BlogContext.Provider
      value={{
        posts,
        addPost,
        updatePost,
        deletePost,
        addComment,
        upvotePost,
        currentUser,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
