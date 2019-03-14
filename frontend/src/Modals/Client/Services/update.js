import { message } from 'antd';

import { updateClient } from '../../../HttpRequests/clients';
import handleException from '../../../Core/Helpers/handleException';

export default (data) => async () => {
  
  try {

    await updateClient({ id: data.id, data });
    
    message.success("Client Updated");

    return true;

  } catch (error) {
    
    handleException(error);

    return false;

  }
}