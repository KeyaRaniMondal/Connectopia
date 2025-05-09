import express from "express";
import {
    createPost,
    deletePost,
    getPost,
    likeUnlikePost,
    replyToPost,
    getFeedPosts,
    getUserPosts,
    sharePost,
} from "../controllers/postControllar.js";
import protectRoute from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/feed", protectRoute, getFeedPosts);
router.get("/:id", getPost);
router.get("/user/:username", getUserPosts);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.put("/likes/:id", protectRoute, likeUnlikePost);
router.put("/reply/:id", protectRoute, replyToPost);
router.post("/share/:originalPostId", protectRoute, sharePost);

export default router;