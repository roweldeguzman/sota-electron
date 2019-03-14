import { message } from 'antd'

import { abortJob } from '../../../HttpRequests/jobs';
import handleException from '../../../Core/Helpers/handleException';
import fetchJob from './fetchJob';
import { setEditMode } from '../State/editMode';

export default (id) => async (dispatch) => {

  try {
  
    await abortJob({ id });
    dispatch(fetchJob());
    
    message.success('Job Aborted');

    dispatch(setEditMode({ status: false }));

  } catch (error) {

    handleException(error);
    
  }
}
