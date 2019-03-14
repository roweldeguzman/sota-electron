import { setShowProjectModal } from '../State/showProjectModal';
import { setSelectedProjectId } from '../State/selectedProjectId';

export default () => async (dispatch) => {

  dispatch(setShowProjectModal(false));
  dispatch(setSelectedProjectId(null));

}