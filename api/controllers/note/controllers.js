import BaseController from '../../core/BaseController';

class BaseNoteController extends BaseController
{
  get(request, response)
  {
    response.send({message: 'Note'});
  }
}

export const NoteController = new BaseNoteController();
