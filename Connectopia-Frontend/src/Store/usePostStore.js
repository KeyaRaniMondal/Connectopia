import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const usePostStore = create((set, get) => ({
  posts: [],
  isPostsLoading: false,

  // Fetch all posts
  getPosts: async () => {
    set({ isPostsLoading: true });
    try {
      const res = await axiosInstance.get("/posts/feed");
      set({ posts: res.data });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to load posts");
    } finally {
      set({ isPostsLoading: false });
    }
  },

  // Create a new post
  createPost: async (postData) => {
    try {
      const res = await axiosInstance.post("/posts/create", postData); 

      set({ posts: [res.data, ...get().posts] }); // add new post to top
      toast.success("Post created successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to create post");
    }
  },



  // Optionally add deletePost or updatePost here
  deletePost: async (postId) => {
    try {
      await axiosInstance.delete(`/posts/${postId}`);
      set({ posts: get().posts.filter(post => post._id !== postId) });
      toast.success("Post deleted");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to delete post");
    }
  },
}));
