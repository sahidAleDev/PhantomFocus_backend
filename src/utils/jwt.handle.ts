import { sign, verify } from 'jsonwebtoken'
import { User } from '../interfaces/user.interface'

const JWT_SECRET = process.env.JWT_SECRET || 'token.01010101'

/**
 * 
 * @param payload -> La carga útil del token
 * @param sign -> La clave secreta para firmar el token
 */
const generateToken = ({ _id, username }: User) => {
  const jwt = sign(
    { _id, username }, 
    JWT_SECRET, 
    {
      expiresIn: '2h' // 2 horas
    })

  return jwt
}

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET)
  return isOk
}

export { generateToken, verifyToken }
