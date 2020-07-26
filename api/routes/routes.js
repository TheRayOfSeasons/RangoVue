import { authenticationRoutes } from './authentication/routes';
import { categoryRoutes } from './category/routes';
import { commonRoutes } from './common/routes';
import { noteRoutes } from './note/routes';

export const routerConfigs = [
  {key: '/', router: commonRoutes},
  {key: '/auth', router: authenticationRoutes},
  {key: '/category', router: categoryRoutes},
  {key: '/note', router: noteRoutes}
];
