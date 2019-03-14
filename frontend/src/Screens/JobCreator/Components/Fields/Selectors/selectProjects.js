import { createSelector } from 'reselect';
import { getFormValues } from 'redux-form';

import { FORM_NAME } from '../../../Form';

const selectProjects = state => state.core.projects;
const selectValues = state => getFormValues(FORM_NAME)(state);

export default createSelector(
  selectValues,
  selectProjects,
  (values, projects) => {

    if (values && values.client_id) {

      return projects.filter(project => project.client_id === values.client_id);

    }

    return [];
  }
)