import { generateToken } from "../utils/jwt.handle";
import { User, LoginData } from "../interfaces/user.interface";
import { verified } from "../utils/bcrypt.handle";
import UserModel from "../models/user";

interface Response {
  token: string
  user: {
    _id: string
    username: string
  }
}

const registerNewUser = async (user: User) => {
  const userFound = await UserModel.findOne({ username: user.username });
  if(userFound) return "USER_ALREADY_EXISTS"

  const response = await UserModel.create(user);
  return response;
}

const loginUser = async ({ password, username }: LoginData): Promise<Response> => {
  const userFound = await UserModel.findOne({ username });
  if (!userFound) throw new Error("NOT_FOUND_USER");

  const passwordHash = userFound.password;
  const isCorrectPassword = await verified(password, passwordHash);

  if (!isCorrectPassword) throw new Error("INVALID_PASSWORD");

  const token = generateToken(userFound);

  return {
    token,
    user: {
      _id: `${userFound._id}`,
      username: userFound.username
    }
  }
}

export {
  registerNewUser,
  loginUser
}
