import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styles from './Component.css';

export default class extends React.PureComponent {

  static propTypes = {
    submitting: PropTypes.bool,
    projectId: PropTypes.number,
    onClickCancel: PropTypes.func.isRequired,
    onClickSubmit: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
  }

  static defaultProps = {
    submitting: null,
    projectId: null
  }

  render () {

    const {
      submitting,
      projectId,
      onClickCancel,
      onClickSubmit,
      onClickDelete
    } = this.props;

    return (
        
      <div className={styles.footer}>
      
        {!!projectId && (
          <Button
            type="danger"
            disabled={submitting}
            className={styles.deleteButton}
            onClick={onClickDelete}
          >
            Delete
          </Button>
        )}
      
        <Button
          type="default"
          disabled={submitting}
          onClick={onClickCancel}
        >
          Cancel
        </Button>

        <Button
          type="primary"
          loading={submitting}
          onClick={onClickSubmit}
        >
          {projectId ? 'Update' : 'Create'}
        </Button>

      </div>

    )
  }
}