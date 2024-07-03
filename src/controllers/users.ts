import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertUser } from "../services/user";

const postUser = async (req: Request, res: Response) => { 
  try {
    const { body } = req
    console.log(body)
    const response = await insertUser(body)
    console.log(response)
    res.send(body)
  } catch (error) {
    console.log(error)
    handleHttp(res, "ERROR_POST_USER")
  }
}

export {
  postUser
}