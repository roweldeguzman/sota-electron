import { connect } from 'react-redux';

import Component from './Component';

import onClickNew from "./Handlers/onClickNew";
import onClickEdit from './Handlers/onClickEdit';

const mapStateToProps = (state) => ({
  client: state.screens.ClientView.client,
});

const actionCreators = {
  onClickNew,
  onClickEdit
};

export default connect(mapStateToProps, actionCreators)(Component);
