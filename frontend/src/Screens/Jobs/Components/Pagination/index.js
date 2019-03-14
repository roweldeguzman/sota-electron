import { connect } from 'react-redux';
import Component from './Component';

import onChangePagination from './Handlers/onChangePagination';

const mapStateToProps = (state) => ({
  pagination: state.screens.Jobs.pagination
});

const actionCreators = {
  onChangePagination
};

export default connect(mapStateToProps, actionCreators)(Component);
