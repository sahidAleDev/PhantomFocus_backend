import { Router } from 'express';
import { readdirSync } from 'fs'

const PATH_ROUTES = `${__dirname}`
const router = Router();

/**
 * 
 * @param fileName (index.ts, item.ts, etc)
 */
const clearFileNames = (fileName: string) => {
  const file = fileName.split('.').shift() // shift elimina el primer elemento del array y lo retorna
  return file 
}

readdirSync(PATH_ROUTES).filter(filename => {
  const cleanName = clearFileNames(filename)

  if(cleanName !== 'index') {
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router)
    })
    console.log(`Adding route /${cleanName}`)
  }
})

export {
  router
}