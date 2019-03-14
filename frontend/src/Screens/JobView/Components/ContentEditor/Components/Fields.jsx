import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Field } from 'redux-form';
import { InputField } from 'redux-form-antd-fields';

// import ReactMDE from './ReactMDE';

const wrapperColSpan = 24;

export default class extends React.PureComponent{

  static propTypes = {    
    submitting: PropTypes.bool,
    onClickSave: PropTypes.func.isRequired,
    onClickCancel: PropTypes.func.isRequired
  }

  static defaultProps = {
    submitting: false
  }

  render () {

    const {
      submitting,
      onClickSave,
      onClickCancel
    } = this.props;

    return (
      
      <div>

        <Field
          name="title"
          label=""
          disabled={submitting}
          component={InputField}
          wrapperCol={{ span: wrapperColSpan }}
          required
        />

        <Field
          name="content"
          label=""
          disabled={submitting}
          component=""
          wrapperCol={{ span: wrapperColSpan }}
          style={{ height: 140 }}
          required
        />

        <div style={{ textAlign: "right", marginTop: 15 }}>

          <Button style={{ marginRight: 10, float: 'left' }} type="primary" onClick={onClickSave} loading={submitting}>
            Save changes
          </Button>

          <Button onClick={onClickCancel} disabled={submitting}>
            Cancel
          </Button>

        </div>

      </div>

    )
  }
}