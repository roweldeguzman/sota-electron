import { setShowClientModal } from '../../../State/showClientModal';

export default () => async (dispatch) => {
  
  await dispatch(setShowClientModal(true));
  
}