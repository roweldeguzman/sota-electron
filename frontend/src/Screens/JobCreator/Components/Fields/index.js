import { connect } from "react-redux";

import Component from "./Component";
import selectProjects from "./Selectors/selectProjects";
import selectPriceType from "./Selectors/selectPriceType";

import onChangeClient from './Handlers/onChangeClient';
import onClickSave from './Handlers/onClickSave';
import onClickCancel from './Handlers/onClickCancel';

const mapStateToProps = state => ({
  clients: state.core.clients,
  projects: selectProjects(state),
  priceType: selectPriceType(state)
});

const actionCreators = {
  onChangeClient,
  onClickSave,
  onClickCancel
};

export default connect(
  mapStateToProps,
  actionCreators
)(Component);
