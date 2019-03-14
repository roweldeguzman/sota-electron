import { setShowProjectModal} from '../../../State/showProjectModal';

export default () => async (dispatch) => {
  
  dispatch(setShowProjectModal(true));
  
}