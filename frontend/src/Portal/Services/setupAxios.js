import axios from 'axios';
import _ from 'lodash';

export default () => (dispatch, getState) => {

  axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

  axios.defaults.authWithToken = true;

  axios.interceptors.request.use(config => {

    if (!config.authWithToken) return config;

    return _.merge({}, config, {
      headers: {
        Authorization: `Bearer ${getState().token}`
      }
    });
    
  });

}