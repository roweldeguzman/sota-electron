import { message } from 'antd';

import { createProject } from '../../../HttpRequests/projects';
import handleException from '../../../Core/Helpers/handleException';

export default (data) => async () => {

  try {

    await createProject({ data });

    message.success('Project Created');

    return true;
    
  }  catch(error) {
    
    handleException(error);

    return false;

  }
}
