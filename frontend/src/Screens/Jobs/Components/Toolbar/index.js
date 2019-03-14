import { connect } from 'react-redux';

import Component from './Component';

import onChangeTab from './Handlers/onChangeTab';

const mapStateToProps = (state) => ({
  activeTab: state.screens.Jobs.activeTab
});

const actionCreators = {
  onChangeTab
};

export default connect(mapStateToProps, actionCreators)(Component);
