import { message } from 'antd';

import { updateProject } from '../../../HttpRequests/projects';
import handleException from '../../../Core/Helpers/handleException';

export default (data) => async () => {
  
  try {

    await updateProject({ id: data.id, data });
    
    message.success("Project Updated");

    return true;

  } catch (error) {
    
    handleException(error);

    return false;

  }
}