import fetchJobs from '../Services/fetchJobs';

export default (props, prevProps) => async (dispatch) => {

  if (props.location.search !== prevProps.location.search) {
    dispatch(fetchJobs());
  }

}