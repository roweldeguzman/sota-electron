import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Field } from 'redux-form';
import { SelectField, InputField } from 'redux-form-antd-fields';

import styles from './Fields.css';

const wrapperColSpan = 24;

export default class extends React.PureComponent{

  static propTypes = {    
    projects: PropTypes.array.isRequired,
    submitting: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    submitting: false
  }

  render () {

    const {
      projects,
      submitting,
      handleSubmit
    } = this.props;

    const projectOptions = projects.map( project => ({ label: `${project.client.name} - ${project.name}`, value: project.id}));
    
    return (

      <form onSubmit={handleSubmit} className={styles.stack}>

        <div className={styles.inputField}>

          <Field
            name="project_id"
            disabled={submitting}
            component={SelectField}
            options={projectOptions}
            wrapperCol={{ span: wrapperColSpan }}
            allowClear={false} 
          />

          <Field
            name="title"
            disabled={submitting}
            component={InputField}
            wrapperCol={{ span: wrapperColSpan }}
            placeholder="Enter the title of a job and press enter ..."
            autoComplete="off"
          />

        </div>

        <Button
          type="primary"
          icon="plus"
          htmlType="submit"
          loading={submitting}
        />

      </form>

    )
  }
}