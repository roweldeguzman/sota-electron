import { setEditMode } from '../../../State/editMode';

export default () => async (dispatch) => dispatch(setEditMode({ status: true }))