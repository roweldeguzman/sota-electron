import { connect } from "react-redux";

import Component from "./Component";

import userIsClient from '../../../../Core/Selectors/userIsClient';

import onClickApprove from './Handlers/onClickApprove';

const mapStateToProps = state => ({
  job: state.modals.Job.job,
  userIsClient: userIsClient(state)
});

const actionCreators = {
  onClickApprove
};

export default connect(
  mapStateToProps,
  actionCreators
)(Component);
