import { PrismaClient } from '@prisma/client';

import { Post } from './post.types';
const prisma = new PrismaClient();
//all posts
export async function getAllPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}
//1 user
export async function getPost(id: string) {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  return post;
}
//create post
export async function createPost(data: Post) {
  const post = await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      isPublished: data.isPublished,
      author_Id: data.author_Id
    }

  })
  return post
}

//delete post
export async function deletePost(id: string) {
  const user = await prisma.post.delete({
    where: {
      id,
    },
  });
  return user;
}
//update post
export async function updatePost(data: Post) {
  const user = await prisma.post.update({
    where: {
      id: data.id
    },
    data,
  });
  return user;
}



