import { connect } from "react-redux";
import Component from "./Component";

import componentDidMount from "./Handlers/componentDidMount";
import componentWillUnmount from "./Handlers/componentWillUnmount";

import onCloseClientModal from './Handlers/onCloseClientModal';
import didUpdateClient from './Handlers/didUpdateClient';
import didDeleteClient from './Handlers/didDeleteClient';

import onCloseProjectModal from './Handlers/onCloseProjectModal';
import didCreateProject from './Handlers/didCreateProject';
import didUpdateProject from './Handlers/didUpdateProject';
import didDeleteProject from './Handlers/didDeleteProject';

const mapStateToProps = state => ({
  client: state.screens.ClientView.client,
  showClientModal: state.screens.ClientView.showClientModal,
  selectedProjectId: state.screens.ClientView.selectedProjectId,
  showProjectModal: state.screens.ClientView.showProjectModal
});

const actionCreators = {
  componentDidMount,
  componentWillUnmount,
  onCloseClientModal,
  didUpdateClient,
  didDeleteClient,
  onCloseProjectModal,
  didCreateProject,
  didUpdateProject,
  didDeleteProject
};

export default connect(
  mapStateToProps,
  actionCreators
)(Component);
