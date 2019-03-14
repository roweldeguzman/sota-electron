import { connect } from 'react-redux';
import Component from './Component';

import onChangeSearch from './Handlers/onChangeSearch';
import onSubmitSearch from './Handlers/onSubmitSearch';
import onClickNew from './Handlers/onClickNew';

const mapStateToProps = (state) => ({
  searchTerm: state.screens.Clients.searchTerm
});

const actionCreators = {
  onChangeSearch,
  onSubmitSearch,
  onClickNew
};

export default connect(mapStateToProps, actionCreators)(Component);
