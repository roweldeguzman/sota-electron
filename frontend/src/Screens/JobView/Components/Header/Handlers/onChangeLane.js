import updateJobField from '../../../Services/updateJobField';

export default (value) => async (dispatch) => {
  
  dispatch(updateJobField({ lane_key: value}));

}