import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Component from './Component';
import selectPriceType from './Selectors/selectPriceType';

import componentDidMount from './Handlers/componentDidMount';
import onClickSave from './Handlers/onClickSave';
import onClickCancel from './Handlers/onClickCancel';
import onClickClearPrice from './Handlers/onClickClearPrice';

import { formConfig } from './Form';

const mapStateToProps = (state) => ({
  priceType: selectPriceType(state)
});

const actionCreators = {
  componentDidMount,
  onClickSave,
  onClickCancel,
  onClickClearPrice
};

export default connect(mapStateToProps, actionCreators)(reduxForm(formConfig)(Component));
