import { submit } from 'redux-form';
import { FORM_NAME } from '../../../Form';

export default () => (dispatch) => dispatch(submit(FORM_NAME))