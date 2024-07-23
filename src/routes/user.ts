import { Router } from "express";
import { registerCtlr, loginCtlr } from "../controllers/users"
const router = Router();

router.post('/register', registerCtlr)
router.post('/login', loginCtlr)

export {
  router
}