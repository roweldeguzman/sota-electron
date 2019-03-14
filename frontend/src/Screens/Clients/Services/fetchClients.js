import handleException from '../../../Core/Helpers/handleException';
import { getClients } from '../../../HttpRequests/clients';
import { setFetching } from '../State/fetching';
import { loadClients } from '../State/clients';
import { setPagination } from '../State/pagination';

export default () => async (dispatch, getState) => {

  const { pagination, searchTerm } = getState().screens.Clients;

  try {

    const params = {};
    
    params['page[size]'] = pagination.pageSize;
    params['page[number]'] = pagination.current;

    if (searchTerm) {
      params.search = searchTerm;
    }

    dispatch(setFetching(true));

    const response = await getClients({ params });
    const clients = response.data;

    dispatch(loadClients(clients.data));
    
    dispatch(setPagination({
      total: clients.pagination.total,
      pageSize: clients.pagination.per_page,
      current: clients.pagination.current_page
    }));

    dispatch(setFetching(false))

  } catch (error) {

    handleException(error);

    dispatch(setFetching(false))
  }
}