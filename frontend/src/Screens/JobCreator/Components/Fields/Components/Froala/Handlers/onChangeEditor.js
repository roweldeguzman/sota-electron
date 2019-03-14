import { setJobContent } from '../../../../../State/jobContent';

export default (model) => async (dispatch) => {
  
  dispatch(setJobContent(model));
  
}
