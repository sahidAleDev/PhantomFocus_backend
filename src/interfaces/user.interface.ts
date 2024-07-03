import { Types } from "mongoose"
const { ObjectId } = Types;

export interface User {
  _id: typeof ObjectId;
  createdAt: Date;
  email: string;
  password: string;
  username: string;
}