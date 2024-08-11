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

const loginCtlr = async ({ body }: Request, res: Response) => {
  try {
    const { username, password } = body;
    const responseUser = await loginUser({ username, password });

    res.cookie('token', responseUser.token, { 
      secure: true,
      maxAge: 1000 * 60 * 60 * 2, // 2 horas
      httpOnly: true
    })
    .send(responseUser);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "NOT_FOUND_USER") {
        res.status(404).send({ error: error.message });
      } else if (error.message === "INVALID_PASSWORD") {
        res.status(401).send({ error: error.message });
      } else {
        console.log(error);
        handleHttp(res, "ERROR_LOGIN_USER");
      }
    } else {
      console.log(error);
      handleHttp(res, "UNKNOWN_ERROR");
    }
  }
}

const logoutCtlr = async (req: Request, res: Response) => {
  res.clearCookie('token').json({ message: "Logout success" });
}

export {
  loginCtlr,
  logoutCtlr,
  registerCtlr,
}