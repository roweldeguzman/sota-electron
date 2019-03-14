import { message } from 'antd';

import handleException from '../../../Core/Helpers/handleException';
import { updateJobAsInvoiced } from '../../../HttpRequests/jobs';
import fetchJob from './fetchJob';
import { setEditMode } from '../State/editMode';
import { getProps } from '../props';

export default () => async (dispatch) => {

  try {

    const { id } = getProps().match.params;
    
    await updateJobAsInvoiced({ id });
    dispatch(fetchJob());
    
    message.success('Job Updated');
    
    dispatch(setEditMode({ status: false }));

  } catch (error) {

    handleException(error);
    
  }
}
