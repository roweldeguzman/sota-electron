import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import styles from './Component.css';

export default class extends React.PureComponent{

  static propTypes = {
    client: PropTypes.object.isRequired,

    onClickEdit: PropTypes.func.isRequired,
  }

  render () {
    const { client, onClickEdit } = this.props;

    return (

      <div className={styles.stack}>

        <h1 className={styles.heading}>
          {`${client.name}`}
        </h1>

        <div style={{ width: 10 }} />

        <Button type="default" onClick={onClickEdit}>
          Edit Client
        </Button>

      </div>

    )
  }
}