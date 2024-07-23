import express from 'express';
import authMiddleware from '../middleware/authMiddleware'; // asegúrate de que la ruta es correcta

const router = express.Router();

router.get('/validate', authMiddleware, (req, res) => {
  res.sendStatus(200); // Si el token es válido, respondemos con un 200 OK
});

export {
  router
}