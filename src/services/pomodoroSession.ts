import { PomodoroSession } from "../interfaces/pomodoroSession.interface";
import PomodoroSessionModel from "../models/pomodoroSession";

const getPomodoroSessions = async () => {
  const response = await PomodoroSessionModel.find({});
  return response;
}

const insertPomodoroSession = async (pomodoroSession: PomodoroSession) => {
  const response = await PomodoroSessionModel.create(pomodoroSession);
  return response;
}

export {
  getPomodoroSessions,
  insertPomodoroSession,
}