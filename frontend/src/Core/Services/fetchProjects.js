import moment from 'moment';
import { getProjects } from '../../HttpRequests/projects';
import { loadProjects } from '../State/projects';

let lastGetTimestamp = null;

const cacheTTL = 60000;

export default ({ force } = {}) => async (dispatch) => {

  try {

    if (!force && lastGetTimestamp) {

      const now = Number(moment().format('x'));

      if (now < (lastGetTimestamp + cacheTTL)) return;
    }
      
    lastGetTimestamp = Number(moment().format('x'));

    const params = {
      pagination: 0
    }
    params.include = ['client'].join();
    params.csort = '-client_id';
    
    const response = await getProjects({ params });

    dispatch(loadProjects (response.data.data));

  } catch (error) {
    
    throw error;

  }
}