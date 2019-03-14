import { first } from 'lodash';
import { change } from 'redux-form';
import fetchClients from '../../../Core/Services/fetchClients';
import fetchProjects from '../../../Core/Services/fetchProjects';
import fetchJobs from '../Services/fetchJobs';
import { FORM_NAME } from '../Components/QuickAdd/Form';

export default () => async (dispatch, getState) => {
  
  await dispatch(fetchClients());
  await dispatch(fetchProjects());
  await dispatch(fetchJobs());

  setTimeout(() => {
   
    const { projects } = getState().core;
    const firstProject = first(projects);
    dispatch(change(FORM_NAME, 'project_id', firstProject ? firstProject.id : null));
    
  }, 200)

}