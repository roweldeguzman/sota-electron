import { message } from 'antd';
import { push } from 'connected-react-router';

import handleException from '../../../Core/Helpers/handleException';
import { deleteJob } from '../../../HttpRequests/jobs';
import { getProps } from '../props';

export default () => async (dispatch) => {

  try {
    const { id } = getProps().match.params;
  
    await deleteJob({ id });

    message.success('Job Deleted');
    dispatch(push('/portal/jobs/'));
        
  } catch (error) {

    handleException(error);
    
  }
}
