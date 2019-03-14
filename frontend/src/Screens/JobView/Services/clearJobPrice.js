import { message } from 'antd'

import { clearJobPrice } from '../../../HttpRequests/jobs';
import handleException from '../../../Core/Helpers/handleException';
import fetchJob from './fetchJob';
import { setEditMode } from '../State/editMode';
import { getProps } from '../props';

export default () => async (dispatch) => {

  try {

    const { id } = getProps().match.params;

    await clearJobPrice({ id });
    dispatch(fetchJob());
    
    message.success('Job Price cleared');

    dispatch(setEditMode({ pricing: false }));

  } catch (error) {

    handleException(error);
    
  }
}
