import { reset } from 'redux-form';

import { setEditMode } from '../../../State/editMode';
import { FORM_NAME  } from '../Form'

export default () => async (dispatch) => {
  
  dispatch(reset(FORM_NAME));
  dispatch(setEditMode({ content: false }));

}