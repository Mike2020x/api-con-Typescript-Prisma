import { Request, Response } from 'express';

import {
  getAllReviews,
  getReview,
  createReview,
  deleteReview,
  updateReview
} from './review.service';

//get all
export async function getAllReviewsHandler(req: Request, res: Response) {
  const reviews = await getAllReviews();
  return res.json(reviews);
}
//get  1
export async function getReviewHandler(req: Request, res: Response) {
  const { id } = req.params
  const review = await getReview(id);

  return res.json(review);
}
//create post
export async function createReviewHandler(req: Request, res: Response) {
  const data = req.body;

  const review = await createReview(data);

  return res.json(review);
}
//delete
export async function deleteReviewHandler(req: Request, res: Response) {
  const { id } = req.params
  const review = await deleteReview(id)

  if (!review) {
    return res.status(404).json({
      message: 'post not found',
    });
  }

  return res.json(review);
}
//update
export async function updateReviewHandler(req: Request, res: Response) {
  const { id } = req.params
  const data = req.body;

  const updatedReview = await updateReview({ ...data, id })

  return res.json(updatedReview);
}
