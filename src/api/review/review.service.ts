import { PrismaClient } from '@prisma/client';

import { Review } from './review.types';
const prisma = new PrismaClient();
//all reviews
export async function getAllReviews() {
  const reviews = await prisma.review.findMany();
  return reviews;
}
//1 review
export async function getReview(id: string) {
  const review = await prisma.review.findUnique({
    where: {
      id,
    },
  });

  return review;
}
//create review
export async function createReview(data: Review) {
  const review = await prisma.review.create({
    data: {
      title: data.title,
      comment: data.comment,
      post_Id: data.post_Id,
      author_Id: data.author_Id
    }

  })
  return review
}
//delete review
export async function deleteReview(id: string) {
  const review = await prisma.review.delete({
    where: {
      id,
    },
  });
  return review;
}
//update review
export async function updateReview(data: Review) {
  const review = await prisma.review.update({
    where: {
      id: data.id
    },
    data,
  });
  return review;
}



