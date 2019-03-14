import * as React from "react";
import PropTypes from "prop-types";
import { Screen } from "evolve-portal";

import Breadcrumbs from "./Components/Breadcrumbs";
import Header from "./Components/Header";
import Projects from "./Components/Projects";

import ProjectModal from "../../Modals/Project";
import ClientModal from "../../Modals/Client";

export default class extends React.PureComponent {
  static propTypes = {
    client: PropTypes.object,
    selectedProjectId: PropTypes.number,
    showClientModal: PropTypes.bool.isRequired,
    showProjectModal: PropTypes.bool.isRequired,

    componentDidMount: PropTypes.func.isRequired,
    componentWillUnmount: PropTypes.func.isRequired,

    onCloseClientModal: PropTypes.func.isRequired,
    didUpdateClient: PropTypes.func.isRequired,
    didDeleteClient: PropTypes.func.isRequired,
    onCloseProjectModal: PropTypes.func.isRequired,
    didCreateProject: PropTypes.func.isRequired,
    didUpdateProject: PropTypes.func.isRequired,
    didDeleteProject: PropTypes.func.isRequired
  };

  static defaultProps = {
    client: null,
    selectedProjectId: null
  };

  componentDidMount = () => this.props.componentDidMount(this.props);

  componentWillUnmount = () => this.props.componentWillUnmount();

  render() {
    const {
      client,
      showClientModal,
      showProjectModal,
      selectedProjectId,

      onCloseClientModal,
      didUpdateClient,
      didDeleteClient,
      onCloseProjectModal,
      didCreateProject,
      didUpdateProject,
      didDeleteProject
    } = this.props;

    if (!client) return null;

    return (
      <Screen>
        <Breadcrumbs client={client} />

        <Header />

        <Projects />
        
        {showClientModal && (
          <ClientModal
            clientId={client.id}
            onClose={onCloseClientModal}
            didUpdate={didUpdateClient}
            didDelete={didDeleteClient}
          />
        )}

        {showProjectModal && (
          <ProjectModal
            clientId={client.id}
            projectId={selectedProjectId}
            onClose={onCloseProjectModal}
            didCreate={didCreateProject}
            didUpdate={didUpdateProject}
            didDelete={didDeleteProject}
          />
        )}
      </Screen>
    );
  }
}
