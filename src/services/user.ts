import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";

const insertUser = async (user: User) => {
  const response = await UserModel.create(user);
  return response;
}

export {
  insertUser
}