import { clearSearchTerm } from '../State/searchTerm';
import { clearSorting } from '../State/sorting';

export default () => async (dispatch) => {

  dispatch(clearSearchTerm());
  dispatch(clearSorting());

}