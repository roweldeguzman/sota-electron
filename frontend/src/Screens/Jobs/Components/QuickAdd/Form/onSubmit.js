import { change, untouch } from 'redux-form';

import createJob from '../../../Services/createJob';
import { FORM_NAME } from './index';

export default async (values, dispatch) => {

  if (!values.title) return;

  await dispatch(createJob(values));

  dispatch(change(FORM_NAME, 'title', null));
  dispatch(untouch(FORM_NAME, 'title'));
  
}