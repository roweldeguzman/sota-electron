import { connect } from 'react-redux';
import Component from './Component';

import onChangeTable from './Handlers/onChangeTable';

const mapStateToProps = (state) => ({
  clients: state.screens.Clients.clients,
  pagination: state.screens.Clients.pagination,
  fetching: state.screens.Clients.fetching
});

const actionCreators = {
  onChangeTable
};

export default connect(mapStateToProps, actionCreators)(Component);
