import { initialize } from 'redux-form';

import { getClient } from '../../../HttpRequests/clients';
import { FORM_NAME } from '../Form';
import { getProps } from '../props';

export default () => async (dispatch) => {

  const { clientId } = getProps();
  
  if (clientId) {

    const response = await getClient({ id: clientId });

    const client = response.data.data;

    dispatch(initialize(FORM_NAME, client))
    
  } else {

    dispatch(initialize(FORM_NAME, { }))

  }

}