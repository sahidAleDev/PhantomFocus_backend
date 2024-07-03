import { Types } from "mongoose"
const { ObjectId } = Types;

export interface PomodoroSession {
  _id: typeof ObjectId;
  breakDuration: number;
  createdAt: Date;
  currentCycle: number;
  endTime: Date;
  isActive: boolean;
  isCompleted: boolean;
  pauseTime: Date;
  resumeTime: Date;
  startTime: Date;
  title: string;
  totalCycles: number;
  userId: typeof ObjectId;
  workDuration: number;
}