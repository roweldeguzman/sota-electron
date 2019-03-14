import { setShowClientModal } from '../State/showClientModal';

export default () => async (dispatch) => {

  dispatch(setShowClientModal(false));

}