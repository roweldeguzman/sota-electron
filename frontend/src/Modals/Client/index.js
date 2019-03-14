import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Component from './Component';

import componentWillMount from './Handlers/componentWillMount';
import onClickCancel from './Handlers/onClickCancel';

import { formConfig } from './Form';

const mapStateToProps = () => ({});

const actionCreators = {
  componentWillMount,
  onClickCancel
};

export default connect(mapStateToProps, actionCreators)(reduxForm(formConfig)(Component));