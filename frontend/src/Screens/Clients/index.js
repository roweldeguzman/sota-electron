import { connect } from "react-redux";

import Component from "./Component";

import componentDidMount from "./Handlers/componentDidMount";
import onCloseClientModal from "./Handlers/onCloseClientModal";
import didCreateClient from "./Handlers/didCreateClient";

const mapStateToProps = state => ({
  showClientModal: state.screens.Clients.showClientModal
});

const actionCreators = {
  componentDidMount,
  onCloseClientModal,
  didCreateClient
};

export default connect(
  mapStateToProps,
  actionCreators
)(Component);
