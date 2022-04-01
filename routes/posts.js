import { Router } from "express";
import { getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/index.js";
const router = Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/like-post', likePost);

export default router;