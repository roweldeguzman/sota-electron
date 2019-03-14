import fetchClient from '../Services/fetchClient';

export default () => async (dispatch) => {

  dispatch(fetchClient());

}