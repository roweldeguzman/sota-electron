import { connect } from 'react-redux';

import Component from './Component';

import onClickEdit from "./Handlers/onClickEdit";

const mapStateToProps = (state) => ({
  job: state.screens.JobView.job
});

const actionCreators = {
  onClickEdit
};

export default connect(mapStateToProps, actionCreators)(Component);
