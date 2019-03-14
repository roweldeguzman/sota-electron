import { message } from 'antd';

import handleException from '../../../Core/Helpers/handleException';
import { updateJobAsApproved } from '../../../HttpRequests/jobs';
import fetchJob from './fetchJob';
import { setEditMode } from '../State/editMode';
import { getProps } from '../props';

export default () => async (dispatch, getState) => {

  try {
    
    const { id } = getProps().match.params;
    const { user } = getState();

    await updateJobAsApproved({ id, data: {user_id: user.id }});
    dispatch(fetchJob());

    message.success('Job Updated');

    dispatch(setEditMode({ status: false }));

  } catch (error) {

    handleException(error);
    
  }
}
