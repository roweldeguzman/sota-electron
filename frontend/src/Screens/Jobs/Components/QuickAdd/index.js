import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Component from './Component';

import { formConfig } from './Form';

const mapStateToProps = (state) => ({
  projects: state.core.projects
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(reduxForm(formConfig)(Component));
