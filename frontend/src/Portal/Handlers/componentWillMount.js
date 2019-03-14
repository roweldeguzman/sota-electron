import { setIsStarting } from '../Actions/status';
import setupSentry from '../Services/setupSentry';
import setupAxios from '../Services/setupAxios';
import resumeSession from '../Services/resumeSession';

export default () => async (dispatch) => {
  
  await dispatch(setIsStarting(true));

  await dispatch(setupSentry());
 
  await dispatch(setupAxios());

  await dispatch(resumeSession());
  
  await setTimeout(() => dispatch(setIsStarting(false)), 1000);
  
}