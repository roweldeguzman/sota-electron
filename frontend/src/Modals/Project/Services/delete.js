import { message } from 'antd';

import { getProps } from '../props';
import { deleteProject } from '../../../HttpRequests/projects';
import handleException from '../../../Core/Helpers/handleException';

export default () => async () => {
  
  try {
  
    const { projectId, onClose, didDelete } = getProps();

    await deleteProject({ id: projectId });
    
    message.success("Project Deleted");

    onClose();
    
    if (didDelete) didDelete();

  } catch (error) {
    
    handleException(error);

  }
}