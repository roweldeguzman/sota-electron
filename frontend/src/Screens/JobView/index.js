import { connect } from "react-redux";
import Component from "./Component";

import componentDidMount from "./Handlers/componentDidMount";
import componentWillUnmount from "./Handlers/componentWillUnmount";

const mapStateToProps = state => ({
  job: state.screens.JobView.job,
  editMode: state.screens.JobView.editMode
});

const actionCreators = {
  componentDidMount,
  componentWillUnmount
};

export default connect(
  mapStateToProps,
  actionCreators
)(Component);
