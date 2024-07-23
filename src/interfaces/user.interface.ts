import { Types } from "mongoose"
const { ObjectId } = Types;

export interface LoginData {
  username: string;
  password: string;
}

export interface User extends LoginData{
  _id: typeof ObjectId;
  createdAt: Date;
}