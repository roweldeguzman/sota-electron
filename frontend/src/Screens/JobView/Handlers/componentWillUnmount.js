import { clearJob } from '../State/job';
import { clearEditMode } from '../State/editMode';

export default () => async (dispatch) => {

  dispatch(clearJob());
  dispatch(clearEditMode());

}