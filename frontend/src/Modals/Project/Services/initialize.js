import { initialize } from 'redux-form';

import { getProject } from '../../../HttpRequests/projects';
import { FORM_NAME } from '../Form';
import { getProps } from '../props';

export default () => async (dispatch) => {

  const { projectId, clientId } = getProps();
  
  if (projectId) {

    const response = await getProject({ id: projectId });

    const project = response.data.data;

    dispatch(initialize(FORM_NAME, project))
    
  } else {

    dispatch(initialize(FORM_NAME, { client_id: clientId }))

  }

}