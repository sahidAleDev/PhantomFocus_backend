import { Types }  from "mongoose";
const { ObjectId } = Types;

export interface Configuration {
  _id: typeof ObjectId;
  breakDuration: number;
  createdAt: Date;
  cyclesBeforeLongBreak: number;
  longBreakDuration: number;
  name: string;
  userId: typeof ObjectId;
  workDuration: number;
}