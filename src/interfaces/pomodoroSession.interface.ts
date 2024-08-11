import { Types } from "mongoose"
const { ObjectId } = Types;

export interface PomodoroSession {
  _id: typeof ObjectId;
  breakDuration: number;
  createdAt: Date;
  currentCycle: number;
  cyclesBeforeLongBreak: number;
  endTime: Date;
  isActive: boolean;
  isCompleted: boolean;
  longBreakDuration: number;
  pauseRemainingTime: number;
  startTime: Date;
  title: string;
  userId: typeof ObjectId;
  workDuration: number;
}