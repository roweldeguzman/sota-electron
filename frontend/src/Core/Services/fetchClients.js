import moment from 'moment';
import { getClients } from '../../HttpRequests/clients';
import { loadClients } from '../State/clients';

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

    const response = await getClients({ params });

    dispatch(loadClients (response.data.data));

  } catch (error) {
    
    throw error;

  }
}