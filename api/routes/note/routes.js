import { Router } from 'express';

const router = Router();

router.get('/', (req, res) =>
{
  res.send({message: 'Notes'});
});

export const noteRoutes = router;
