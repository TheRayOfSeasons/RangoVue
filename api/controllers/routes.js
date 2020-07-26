import { Router } from 'express';
import { authenticationRoutes } from './authentication/routes';
import { categoryRoutes } from './category/routes';
import { commonRoutes } from './common/routes';
import { noteRoutes } from './note/routes';

export const router = Router();
const routes = {
  '/': commonRoutes,
  '/auth': authenticationRoutes,
  '/category': categoryRoutes,
  '/note': noteRoutes
};
for(const key in routes)
  router.use(key, routes[key]);
