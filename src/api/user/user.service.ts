import { PrismaClient } from '@prisma/client';

import { User } from './user.types';

const prisma = new PrismaClient();
//all users
export async function getAllUsers() {
  const users = await prisma.user.findMany();
  return users;
}
//1 user
export async function getUser(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
}
//create user
export async function createUser(data: User) {
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      avatar: data.avatar
    }

  })
  return user
}
//delete user
export async function deleteUser(id: string) {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
}

export async function updateUser(data: User) {
  const user = await prisma.user.update({
    where: {
      id: data.id
    },
    data,
  });
  return user;
}


