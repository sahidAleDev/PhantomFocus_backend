import { Router } from "express";
import { 
  getPomodoroSessionsCtlr,
  postPomodosoSessionCtlr,
} 
from "../controllers/pomodoSessions"
const router = Router();

router.get('/', getPomodoroSessionsCtlr)
router.post('/', postPomodosoSessionCtlr)

export {
  router
}