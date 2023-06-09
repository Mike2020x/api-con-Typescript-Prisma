import { Request, Response } from 'express';

import {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser
} from './user.service';

//get all
export async function getAllUsersHandler(req: Request, res: Response) {
  const users = await getAllUsers();

  return res.json(users);
}
//get  1
export async function getUserHandler(req: Request, res: Response) {
  const { id } = req.params
  const users = await getUser(id);

  return res.json(users);
}
//create
export async function createUserHandler(req: Request, res: Response) {
  const data = req.body;

  const user = await createUser(data);

  return res.json(user);
}
//delete
export async function deleteUserHandler(req: Request, res: Response) {
  const { id } = req.params
  const user = await deleteUser(id)

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  return res.json(user);
}
//update
export async function updateUserHandler(req: Request, res: Response) {
  const { id } = req.params
  const data = req.body;

  const updatedUSer = await updateUser({ ...data, id })

  return res.json(updatedUSer);
}
