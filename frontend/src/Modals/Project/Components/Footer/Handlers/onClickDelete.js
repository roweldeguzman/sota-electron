import { Modal } from 'antd';
import deleteProject from '../../../Services/delete';

export default () => (dispatch) => {

  Modal.confirm({
    title: `Are you sure to delete this Project?`,
    content: 'Note: This action cannot be undone',
    okText: 'Yes, Delete it',
    width: 400,
    onOk: () => dispatch(deleteProject())
  })

}