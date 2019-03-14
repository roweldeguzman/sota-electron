import { initialize } from 'redux-form';
import { FORM_NAME } from '../Form';

export default (props) => async (dispatch) => {
  
  const { record } = props;

  
  if (record.price_type) {
    dispatch(initialize(FORM_NAME, record));

  } else {

    dispatch(initialize(FORM_NAME, { id: record.id }));

  }

}