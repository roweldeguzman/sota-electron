import { createAction, handleActions } from 'redux-actions';

const loadProjects = createAction("CORE/PROJECTS/LOAD_PROJECTS");

const defaultState = []

const reducer = handleActions(
  {
    [loadProjects]: (state, action) => action.payload
  },
  defaultState
);

export { loadProjects, reducer };