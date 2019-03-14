import { connect } from 'react-redux';
import Component from './Component';

import onClickEditPrice from './Handlers/onClickEditPrice';
import onClickEditStatus from './Handlers/onClickEditStatus';
import onBlurStatus from './Handlers/onBlurStatus';
import onChangeStatus from './Handlers/onChangeStatus';

const mapStateToProps = (state) => ({
  job: state.screens.JobView.job,
  editMode: state.screens.JobView.editMode
})

const actionCreators = {
  onClickEditPrice,
  onClickEditStatus,
  onBlurStatus,
  onChangeStatus
};

export default connect(mapStateToProps, actionCreators)(Component);