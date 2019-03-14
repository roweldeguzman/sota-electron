import * as React from "react";
import PropTypes from "prop-types";
import { Screen } from "evolve-portal";

import Breadcrumbs from "./Components/Breadcrumbs";
import Header from "./Components/Header";
import Table from "./Components/Table";
import ClientModal from "../../Modals/Client";

export default class extends React.PureComponent {
  static propTypes = {
    showClientModal: PropTypes.bool.isRequired,
    componentDidMount: PropTypes.func.isRequired,
    onCloseClientModal: PropTypes.func.isRequired,
    didCreateClient: PropTypes.func.isRequired
  };

  componentDidMount = () => this.props.componentDidMount();

  render() {
    const {
      showClientModal,
      onCloseClientModal,
      didCreateClient
    } = this.props;
    return (
      <Screen>
        <Breadcrumbs />

        <Header />

        <Table />

        {showClientModal && (
          <ClientModal
            onClose={onCloseClientModal}
            didCreate={didCreateClient}
          />
        )}
        
      </Screen>
    );
  }
}
