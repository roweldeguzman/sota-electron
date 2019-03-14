import { connect } from 'react-redux';
import Component from './Component';

import onClickCancel from './Handlers/onClickCancel';
import onClickSubmit from './Handlers/onClickSubmit';
import onClickDelete from './Handlers/onClickDelete';

const mapStateToProps = () => ({});

const actionCreators = {
  onClickCancel,
  onClickSubmit,
  onClickDelete
};

export default connect(mapStateToProps, actionCreators)(Component);