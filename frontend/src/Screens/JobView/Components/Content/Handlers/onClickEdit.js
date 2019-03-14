import { setEditMode } from '../../../State/editMode';

export default () => async (dispatch) => {

  dispatch(setEditMode({ content: true }));
  
}