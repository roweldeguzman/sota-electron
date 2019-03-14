import { message } from 'antd';
import handleException from '../../../../../Core/Helpers/handleException';

export default (errors, dispatch, submitError) => {

  if (submitError) {

    handleException(submitError);

  } else if (errors) {

    message.error("Please complete all of the required fields")

  }

}