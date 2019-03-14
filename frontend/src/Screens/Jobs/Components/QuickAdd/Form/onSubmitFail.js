import { message } from 'antd';
import { untouch } from 'redux-form';
import handleException from '../../../../../Core/Helpers/handleException';
import { FORM_NAME } from './index';

export default (errors, dispatch, submitError) => {

  if (submitError) {

    handleException(submitError);

  } else if (errors) {

    message.error("Please complete all of the required fields")

    setTimeout(() => {
      dispatch(untouch(FORM_NAME, 'title'));
    }, 1000);

  }

}