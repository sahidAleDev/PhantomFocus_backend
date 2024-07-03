import { handleHttp } from "../utils/error.handle";
import { Request, Response } from "express";
import { 
  getConfigurations,
  insertConfiguration 
} from "../services/configuration";

const getConfigurationsCtlr = async (req: Request, res: Response) => {
  try {
    const response = await getConfigurations()
    const data = response ? response : 'NOT_FOUND';
    res.send(data)
  } catch (error) {
    handleHttp(res, "ERROR_GET_CONFIGURATIONS")
  }
}

const postConfigurationCtrl = async (req: Request, res: Response) => {
  try {
    const { body } = req
    const response = await insertConfiguration(body)
    res.send(response)
  } catch (error) {
    handleHttp(res, "ERROR_POST_CONFIGURATION")
  }
}

export {
  getConfigurationsCtlr,
  postConfigurationCtrl,
}