import { connect } from "react-redux";

import Component from "./Component";

import userIsClient from "../../Core/Selectors/userIsClient";

import componentDidMount from "./Handlers/componentDidMount";
import componentDidUpdate from "./Handlers/componentDidUpdate";
import componentWillUnmount from "./Handlers/componentWillUnmount";

const mapStateToProps = state => ({
  pagination: state.screens.Jobs.pagination,
  userIsClient: userIsClient(state)
});

const actionCreators = {
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount
};

export default connect(
  mapStateToProps,
  actionCreators
)(Component);
