import { getClient } from '../../../HttpRequests/clients';
import { loadClient } from '../State/client';
import handleException from '../../../Core/Helpers/handleException';
import { getProps } from '../props';

export default () => async (dispatch) => {

  try {
    
    const { id } = getProps().match.params;

    const params = {};
    params.include = ['projects'].join();
    
    const response = await getClient({ id, params })

    dispatch(loadClient(response.data.data ));

  } catch (error) {

    handleException(error);

  }
}