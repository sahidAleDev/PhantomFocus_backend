// middleware/authMiddleware.js
import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle"; // asumiendo que tienes una función para verificar el token
import { JwtPayload } from "jsonwebtoken"

interface RequestExt extends Request {
  user?: string | JwtPayload
}

const authMiddleware = (req: RequestExt, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send("Access Denied: No Token Provided!");
  }

  try {
    const verified = verifyToken(token);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};

export default authMiddleware;
