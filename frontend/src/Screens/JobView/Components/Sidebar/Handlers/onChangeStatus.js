import { Modal } from 'antd';

import updateJobAsApproved from '../../../Services/updateJobAsApproved';
import updateJobAsCompleted from '../../../Services/updateJobAsCompleted';
import updateJobAsInvoiced from '../../../Services/updateJobAsInvoiced';
import abortJob from '../../../Services/abortJob';
import deleteJob from '../../../Services/deleteJob';

export default (key) => async (dispatch) => {
    
  switch(key) {
    
    default:
      break;

    case 'APPROVED':
      dispatch(updateJobAsApproved());
      break;
    
    case 'COMPLETED':
      dispatch(updateJobAsCompleted());
      break;

    case 'INVOICED':
      dispatch(updateJobAsInvoiced());
      break;

    case 'ABORT':
      Modal.confirm({
        title: `Are you sure to abort this Job?`,
        content: 'Note: This action cannot be undone',
        okText: 'Yes, Abort it',
        width: 400,
        onOk: () => dispatch(abortJob())
      });
      
      break;

    case 'DELETE':
      Modal.confirm({
        title: `Are you sure to delete this Job?`,
        content: 'Note: This action cannot be undone',
        okText: 'Yes, Delete it',
        width: 400,
        onOk: () => dispatch(deleteJob())
      });
      break;
  }

}