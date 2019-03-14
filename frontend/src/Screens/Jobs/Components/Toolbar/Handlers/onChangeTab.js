import { setActiveTab } from '../../../State/activeTab';
import fetchJobs from '../../../Services/fetchJobs';

export default (tab) => async (dispatch) => {

  dispatch(setActiveTab(tab));
  dispatch(fetchJobs());
  
}