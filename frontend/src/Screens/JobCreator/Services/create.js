import { message } from 'antd';
import { pick } from 'lodash';
import { push } from 'connected-react-router';

import handleException from '../../../Core/Helpers/handleException';
import { createJob } from '../../../HttpRequests/jobs';

export default (values) => async (dispatch, getState) => {

  try {

    const data = pick(values, 'client_id', 'project_id', 'title', 'price_type');
    data.content = getState().screens.JobCreator.jobContent;

    if (values.price_type) {
      if (values.price_type === "Estimate") {

        data.estimate_lower_amount = values.estimate_lower_amount.replace(/[^0-9.]/g, "");
        data.estimate_upper_amount = values.estimate_upper_amount.replace(/[^0-9.]/g, "");

      } else {

        data.quote_amount = values.quote_amount.replace(/[^0-9.]/g, "");

      }
    }

    const response = await createJob({ data });

    message.success("New Job Created");
    dispatch(push(`/portal/jobs/${response.data.data.id}/view`));

  } catch(error) {

    handleException(error);

  }
}