import { setSearchTerm } from '../../../State/searchTerm';

export default (query) => async (dispatch) => {

  dispatch(setSearchTerm(query.target.value));
    
}