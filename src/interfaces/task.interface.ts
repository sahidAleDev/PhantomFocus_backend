import { Types } from "mongoose"
const { ObjectId } = Types;

export interface Task {
  _id: typeof ObjectId;
  completed: boolean;
  createdAt: Date;
  description?: string;
  pomodoroSessionId: typeof ObjectId;
  title: string;
  updatedAt: Date;
  userId: typeof ObjectId;
}