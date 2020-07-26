import { Router } from 'express';

const router = Router();

router.get('/', (req, res) =>
{
  const welcome = process.env.WELCOME_MESSAGE || 'Welcome to Rango!';
  res.send({message: welcome});
});

export const commonRoutes = router;
