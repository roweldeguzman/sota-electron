import { message } from 'antd';

import handleException from '../../../Core/Helpers/handleException';
import { updateJob } from '../../../HttpRequests/jobs';
import { setEditMode } from '../State/editMode';
import fetchJob from './fetchJob';

export default (data) => async (dispatch) => {
  
  try {

    await updateJob({ id: data.id, data });
    
    message.success("Job Updated");
    
    dispatch(fetchJob());
    dispatch(setEditMode({ content: false }));

  } catch (error) {
    
    handleException(error);

  }
}