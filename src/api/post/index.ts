import { Router } from "express";

import {
  getAllPostsHandler,
  getPostHandler,
  createPostHandler,
  deletePostHandler,
  updatePostHandler,
} from "./post.controller";

const router = Router()

// /api/posts -> GET
router.get('/', getAllPostsHandler);
// /api/post/:id -> GET
router.get('/:id', getPostHandler);
// api/post -> POST
router.post("/", createPostHandler)
// /api/post/:id -> DELETE
router.delete("/:id", deletePostHandler)
// /api/users/:id -> PATCH
router.patch("/:id", updatePostHandler)


export default router;

