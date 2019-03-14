import { createSelector } from 'reselect';
import queryString from 'query-string';
import { find } from 'lodash';

const selectQuery = state => queryString.parse(state.router.location.search);
const selectProjects = state => state.core.projects;

export default createSelector(
  selectQuery,
  selectProjects,
  (query, projects) => query.projectId ? find(projects, { id: Number(query.projectId) }) : null
)