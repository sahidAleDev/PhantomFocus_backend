import { Router } from "express";
import { registerCtlr, loginCtlr, logoutCtlr } from "../controllers/users"
const router = Router();

router.post('/register', registerCtlr)
router.post('/login', loginCtlr)
router.post('/logout', logoutCtlr)

export {
  router
}