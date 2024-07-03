import { Router } from "express";
import { postUser } from "../controllers/users"
const router = Router();

router.post('/', postUser)

export {
  router
}