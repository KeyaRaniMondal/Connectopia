import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const usePostStore = create((set, get) => ({
  posts: [],
  isPostsLoading: false,

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

  
  createPost: async ({ text, img }) => {
    if (!text || !text.trim()) {
      throw new Error("Text is required");
    }

    try {
      const res = await axiosInstance.post("/posts/create", { text, img });
      set({ posts: [res.data, ...get().posts] });
      return res.data;
    } catch (error) {
      throw new Error(error?.response?.data?.error || "Failed to create post");
    }
  },



  deletePost: async (postId) => {
    try {
      await axiosInstance.delete(`/posts/${postId}`);
      set({ posts: get().posts.filter((p) => p._id !== postId) });
      toast.success("Post deleted");
    } catch (error) {
      toast.error(error?.response?.data?.error || "Failed to delete post");
    }
  },
}));
