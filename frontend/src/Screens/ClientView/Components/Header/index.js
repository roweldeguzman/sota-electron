import { connect } from 'react-redux';
import Component from './Component';

import onClickEdit from './Handlers/onClickEdit';

const mapStateToProps = (state) => ({
  client: state.screens.ClientView.client
});

const actionCreators = {
  onClickEdit
};

export default connect(mapStateToProps, actionCreators)(Component);
