import { compare } from "bcryptjs";

const verified = async (pass: string, passHash: string) => {
  const isCorrect = await compare(pass, passHash)
  return isCorrect
}

export {
  verified
}