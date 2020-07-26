import BaseController from '../../core/BaseController';

class BaseAuthController extends BaseController
{
  get(request, response)
  {
    response.send({message: 'Authentication'});
  }
}

export const AuthController = new BaseAuthController();
