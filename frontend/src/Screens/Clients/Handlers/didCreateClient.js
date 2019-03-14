import fetchClients from '../Services/fetchClients';

export default () => async (dispatch) => {

  dispatch(fetchClients());

}