import { message } from 'antd';

import { createClient } from '../../../HttpRequests/clients';
import handleException from '../../../Core/Helpers/handleException';

export default (data) => async () => {

  try {

    await createClient({ data });

    message.success('Client Created');

    return true;
    
  }  catch(error) {
    
    handleException(error);

    return false;

  }
}
