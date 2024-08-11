import { Router } from "express";
import { 
  getPomodoroSessionsCtlr,
  postPomodosoSessionCtlr,
  updatePomodosoSessionCtlr
} 
from "../controllers/pomodoSessions"
const router = Router();

router.get('/', getPomodoroSessionsCtlr)
router.post('/', postPomodosoSessionCtlr)
router.put('/:id', updatePomodosoSessionCtlr)

export {
  router
}