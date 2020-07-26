import { Router } from 'express';
import { CommonController } from './controllers';

const router = Router();

router.get('/', CommonController.get);

export const commonRoutes = router;
