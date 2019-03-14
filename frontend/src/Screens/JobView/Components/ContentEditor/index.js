import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Component from './Component';

import componentDidMount from './Handlers/componentDidMount';
import onClickSave from './Handlers/onClickSave';
import onClickCancel from './Handlers/onClickCancel';

import { formConfig } from './Form';

const mapStateToProps = (state) => ({
  job: state.screens.JobView.job
});

const actionCreators = {
  componentDidMount,
  onClickSave,
  onClickCancel
};

export default connect(mapStateToProps, actionCreators)(reduxForm(formConfig)(Component));
