import BaseController from '../../core/BaseController';

class BaseCategoryController extends BaseController
{
  get(request, response)
  {
    response.send({message: 'Category'});
  }
}

export const CategoryController = new BaseCategoryController();
