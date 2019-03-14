import queryString from 'query-string';
import { getJobs } from '../../../HttpRequests/jobs';
import { setFetching } from '../State/fetching';
import { loadJobs } from '../State/jobs';
import { setPagination } from '../State/pagination';
import handleException from '../../../Core/Helpers/handleException';

export default () => async (dispatch, getState) => {

  const {
    pagination,
    searchTerm,    
    sorting,
    activeTab
  } = getState().screens.Jobs;

  const {
    clientId,
    projectId
  } = queryString.parse(getState().router.location.search);

  try {

    const params = {};

    params.include = ['client','project'].join();

    params.append = ['lane'].join();

    if (clientId) {
      params['filter[client_id]'] = clientId;
    }

    if (projectId) {
      params['filter[project_id]'] = projectId;
    }

    params['page[size]'] = pagination.pageSize;
    params['page[number]'] = pagination.current;

    if (searchTerm) {
      params.search = searchTerm;
    }

    if (sorting.columnKey) {
      params.csort = (sorting.order === 'descend' ? '-' : '') + sorting.columnKey;
    }

    if (activeTab !== 0) {
      params['filter[lane_key]'] = activeTab;
    }

    dispatch(setFetching(true));

    const response = await getJobs({ params });
    const jobs = response.data;

    dispatch(loadJobs(jobs.data));
    
    dispatch(setPagination({
      total: jobs.pagination.total,
      pageSize: jobs.pagination.per_page,
      current: jobs.pagination.current_page
    }));

    dispatch(setFetching(false))

  } catch (error) {

    handleException(error);

    dispatch(setFetching(false))
  }
}