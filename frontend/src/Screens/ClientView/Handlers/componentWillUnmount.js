import { clearClient } from '../State/client';

export default () => async (dispatch) => {

  dispatch(clearClient());

}