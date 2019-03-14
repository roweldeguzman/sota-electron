import { Modal } from 'antd';

import clearJobPrice from '../../../Services/clearJobPrice';

export default () => async (dispatch) => {

  Modal.confirm({
    title: `Are you sure to clear the price of this Job?`,
    content: 'Note: This action cannot be undone',
    okText: 'Yes, Clear it',
    width: 420,
    onOk: () => dispatch(clearJobPrice())
  });

}