import { message } from 'antd';
import { find } from 'lodash';

import { createJob } from '../../../HttpRequests/jobs';
import handleException from '../../../Core/Helpers/handleException';
import fetchJobs from './fetchJobs';

export default (values) => async (dispatch, getState) => {

  try {

    const { projects } = getState().core;
    const clientId = find(projects, { id: values.project_id})
    
    const data = {
      ...values,
      client_id: clientId.client_id
    };

    await createJob({ data });
    dispatch(fetchJobs());

    message.success('Job Created');
    
  }  catch(error) {
    
    handleException(error);

  }
}
