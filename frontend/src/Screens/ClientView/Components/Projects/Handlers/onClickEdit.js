import { setShowProjectModal} from '../../../State/showProjectModal';
import { setSelectedProjectId } from '../../../State/selectedProjectId';

export default (props) => async (dispatch) => {
  
  await dispatch(setSelectedProjectId(props.id));
  await dispatch(setShowProjectModal(true));
  
}