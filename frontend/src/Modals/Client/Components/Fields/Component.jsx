import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { InputField } from 'redux-form-antd-fields';

const labelColSpan = 5;
const wrapperColSpan = 18;

export default class extends React.PureComponent{

  static propTypes = {
    submitting: PropTypes.bool.isRequired
  }

  render () {

    const { submitting } = this.props;

    return (
      
      <React.Fragment>

        <Field
          name="name"
          label="Name"
          disabled={submitting}
          component={InputField}
          labelCol={{ span: labelColSpan }}
          wrapperCol={{ span: wrapperColSpan }}
          required
        />

      </React.Fragment>

    )
  }
}