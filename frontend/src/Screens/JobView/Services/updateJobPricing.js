import { message } from 'antd';

import handleException from '../../../Core/Helpers/handleException';
import { updateJobPricing } from '../../../HttpRequests/jobs'
import { setEditMode } from '../State/editMode';
import fetchJobs from './fetchJob';

export default (values) => async (dispatch) => {

  try {
    
    const data = {...values}
    if (values.price_type === "Estimate") {

      data.estimate_lower_amount = values.estimate_lower_amount.replace(/[^0-9.]/g, "");
      data.estimate_upper_amount = values.estimate_upper_amount.replace(/[^0-9.]/g, "");

    } else {

      data.quote_amount = values.quote_amount.replace(/[^0-9.]/g, "");

    }

    await updateJobPricing({id: values.id, data });
    
    dispatch(fetchJobs());
    dispatch(setEditMode({ pricing: false }));

    message.success('Job Updated');
    
  } catch(error) {

    handleException(error);

  }
}