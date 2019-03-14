import { change } from 'redux-form';
import { first } from 'lodash'
import { FORM_NAME } from '../../../Form';

export default (event, value) => async (dispatch, getState) => {
  
  const { projects } = getState().core;

  const projectList = projects.filter(project => project.client_id === value);
  const firstProject = first(projectList);
  
  dispatch(change(FORM_NAME, 'project_id', firstProject ? firstProject.id : null)); 
  
}