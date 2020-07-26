import { Router } from 'express';
import { NoteController } from './controllers';

const router = Router();

router.get('/', NoteController.get);

export const noteRoutes = router;
