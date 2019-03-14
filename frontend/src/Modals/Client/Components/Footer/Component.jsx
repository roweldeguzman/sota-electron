import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styles from './Component.css';

export default class extends React.PureComponent {

  static propTypes = {
    submitting: PropTypes.bool,
    clientId: PropTypes.number,
    onClickCancel: PropTypes.func.isRequired,
    onClickSubmit: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
  }

  static defaultProps = {
    submitting: null,
    clientId: null
  }

  render () {

    const {
      submitting,
      clientId,
      onClickCancel,
      onClickSubmit,
      onClickDelete
    } = this.props;

    return (
        
      <div className={styles.footer}>
      
        {!!clientId && (
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
          {clientId ? 'Update' : 'Create'}
        </Button>

      </div>

    )
  }
}