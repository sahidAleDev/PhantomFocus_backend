import { generateToken } from "../utils/jwt.handle";
import { User, LoginData } from "../interfaces/user.interface";
import { verified } from "../utils/bcrypt.handle";
import UserModel from "../models/user";

const registerNewUser = async (user: User) => {
  const userFound = await UserModel.findOne({ username: user.username });
  if(userFound) return "USER_ALREADY_EXISTS"

  const response = await UserModel.create(user);
  return response;
}

const loginUser = async ({ password, username }: LoginData): Promise<string> => {
  const userFound = await UserModel.findOne({ username });
  if (!userFound)  return "NOT_FOUND_USER" 

  const passwordHash = userFound.password
  const isCorrectPassword = await verified(password, passwordHash)

  if (!isCorrectPassword) return "INVALID_PASSWORD"

  const token = generateToken(userFound)

  console.log(token)

  return token
}

export {
  registerNewUser,
  loginUser
}