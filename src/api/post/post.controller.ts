import { Request, Response } from 'express';

import {
  getAllPosts,
  getPost,
  createPost,
  deletePost,
  updatePost
} from './post.service';

//get all
export async function getAllPostsHandler(req: Request, res: Response) {
  const posts = await getAllPosts();
  return res.json(posts);
}
//get  1
export async function getPostHandler(req: Request, res: Response) {
  const { id } = req.params
  const post = await getPost(id);

  return res.json(post);
}
//create post
export async function createPostHandler(req: Request, res: Response) {
  const data = req.body;

  const post = await createPost(data);

  return res.json(post);
}


//delete
export async function deletePostHandler(req: Request, res: Response) {
  const { id } = req.params
  const post = await deletePost(id)

  if (!post) {
    return res.status(404).json({
      message: 'post not found',
    });
  }

  return res.json(post);
}
//update
export async function updatePostHandler(req: Request, res: Response) {
  const { id } = req.params
  const data = req.body;

  const updatedPost = await updatePost({ ...data, id })

  return res.json(updatedPost);
}
