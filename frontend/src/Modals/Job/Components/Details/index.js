import { connect } from "react-redux";

import Component from "./Component";

const mapStateToProps = state => ({
  job: state.modals.Job.job,
});

const actionCreators = {};

export default connect(
  mapStateToProps,
  actionCreators
)(Component);
