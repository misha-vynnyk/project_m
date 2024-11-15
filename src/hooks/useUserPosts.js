import { useState, useCallback } from "react";

const useUserPosts = (initialPosts) => {
  const [posts, setPosts] = useState(initialPosts);

  // Memoize functions for better performance
  const getPublicPosts = useCallback(
    () => posts.filter((post) => post.isPublic),
    [posts]
  );
  const getPrivatePosts = useCallback(
    () => posts.filter((post) => !post.isPublic),
    [posts]
  );

  // Adding new post
  const addPost = useCallback((newPost) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      { ...newPost, id: prevPosts.length + 1 },
    ]);
  }, []);

  // Removing a post by ID
  const removePost = useCallback((id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  }, []);

  return {
    posts,
    getPublicPosts,
    getPrivatePosts,
    addPost,
    removePost,
  };
};

export default useUserPosts;
