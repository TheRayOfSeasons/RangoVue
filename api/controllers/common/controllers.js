import BaseController from '../../core/BaseController';

class BaseCommonController extends BaseController
{
  get(request, response)
  {
    const welcome = process.env.WELCOME_MESSAGE || 'Welcome!';
    response.send({message: welcome});
  }
}

export const CommonController = new BaseCommonController();
