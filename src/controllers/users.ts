import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { registerNewUser, loginUser } from "../services/user";

const registerCtlr = async (req: Request, res: Response) => { 
  try {
    const { body } = req
    const responseUser = await registerNewUser(body)

    if(responseUser === "USER_ALREADY_EXISTS") {
      res.status(403)
    }

    res.send(responseUser)
  } catch (error) {
    console.log(error)
    handleHttp(res, "ERROR_POST_USER")
  }
}

const loginCtlr = async ({ body } : Request, res: Response) => {
  try {
    const { username, password } = body
    const responseUser = await loginUser({ username, password })

    if(responseUser === "NOT_FOUND_USER") res.status(404)

    if(responseUser === "INVALID_PASSWORD") res.status(401)

    res
      .cookie('token', responseUser, { 
        secure: true,
        maxAge: 1000 * 60 * 60 * 2, // 2 horas
        httpOnly: true
      })
      .send({ responseUser})
  } catch (error) {
    
  }
}

export {
  registerCtlr,
  loginCtlr,
}