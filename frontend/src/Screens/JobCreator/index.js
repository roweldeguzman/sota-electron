import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'; 

import Component from './Component';

import componentDidMount from './Handlers/componentDidMount';

import { formConfig } from './Form';

const mapStateToProps = () => ({});

const actionCreators = {
  componentDidMount
};


export default connect(mapStateToProps, actionCreators)(reduxForm(formConfig)(Component));