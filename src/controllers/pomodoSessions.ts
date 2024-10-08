import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { 
  getPomodoroSessions,
  insertPomodoroSession, 
  updatePomodoroSession,
} 
from "../services/pomodoroSession";


const getPomodoroSessionsCtlr = async (req: Request, res: Response) => {
  try {
    const response = await getPomodoroSessions()
    res.send(response)
  } catch (error) {
    handleHttp(res, "ERROR_GET_POMODORO_SESSIONS")
  }
}

const postPomodosoSessionCtlr = async (req: Request, res: Response) => { 
  try {
    const { body } = req
    const response = await insertPomodoroSession(body)
    console.log(response)
    res.send(body)
  } catch (error) {
    handleHttp(res, "ERROR_POST_POMODORO_SESSION")
  }
}

const updatePomodosoSessionCtlr = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await updatePomodoroSession(id, body)
    res.send(response)
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_POMODORO_SESSION")
  }
}

export {
  getPomodoroSessionsCtlr,
  postPomodosoSessionCtlr,
  updatePomodosoSessionCtlr,
}