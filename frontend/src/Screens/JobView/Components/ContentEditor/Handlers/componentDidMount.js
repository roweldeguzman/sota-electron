import { initialize } from 'redux-form';

import { FORM_NAME } from '../Form';

export default (props) => async (dispatch) => {
  
  dispatch(initialize(FORM_NAME, props.job))

}