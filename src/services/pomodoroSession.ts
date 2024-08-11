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

const updatePomodoroSession = async (id: string, pomodoroSession: PomodoroSession) => {
  const response  = await PomodoroSessionModel.findOneAndUpdate({ _id: id }, pomodoroSession, { new: true });
  return response;
}

export {
  getPomodoroSessions,
  insertPomodoroSession,
  updatePomodoroSession,
}