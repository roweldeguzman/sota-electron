import { connect } from 'react-redux';
import Component from './Component';

import onChangeSearch from './Handlers/onChangeSearch';
import onSubmitSearch from './Handlers/onSubmitSearch';
import onChangeSortDirection from './Handlers/onChangeSortDirection';
import onChangeSort from './Handlers/onChangeSort';

const mapStateToProps = (state) => ({
  searchTerm: state.screens.Jobs.searchTerm,
  sortingOrder: state.screens.Jobs.sorting.order
});

const actionCreators = {
  onChangeSearch,
  onSubmitSearch,
  onChangeSortDirection,
  onChangeSort
};

export default connect(mapStateToProps, actionCreators)(Component);
