import { message } from 'antd';

import { getProps } from '../props';
import { deleteClient } from '../../../HttpRequests/clients';
import handleException from '../../../Core/Helpers/handleException';

export default () => async () => {
  
  try {
  
    const { clientId, onClose, didDelete } = getProps();

    await deleteClient({ id: clientId });
    
    message.success("Client Deleted");

    onClose();
    
    if (didDelete) didDelete();

  } catch (error) {
    
    handleException(error);

  }
}