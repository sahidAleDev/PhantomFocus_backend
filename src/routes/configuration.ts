import { Router } from "express";
import { 
  getConfigurationsCtlr,
  postConfigurationCtrl,
} from "../controllers/configuration"
const router = Router();

router.get('/', getConfigurationsCtlr)
router.post('/', postConfigurationCtrl)

export {
  router
}