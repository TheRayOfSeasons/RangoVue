import { Router } from 'express';
import { AuthController } from './controllers';

const router = Router();

router.get('/', AuthController.get);

export const authenticationRoutes = router;
