import { Router } from "express";

import {
  getAllReviewsHandler,
  getReviewHandler,
  createReviewHandler,
  deleteReviewHandler,
  updateReviewHandler,
} from "./review.controller";

const router = Router()

// /api/review -> GET
router.get('/', getAllReviewsHandler);
// /api/review/:id -> GET
router.get('/:id', getReviewHandler);
// api/review -> POST
router.post("/", createReviewHandler)
// /api/review/:id -> DELETE
router.delete("/:id", deleteReviewHandler)
// /api/review/:id -> PATCH
router.patch("/:id", updateReviewHandler)


export default router;

