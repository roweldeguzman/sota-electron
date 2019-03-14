import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import styles from './Header.css';

export default class extends React.PureComponent{

  static propTypes = {
    onClickNew: PropTypes.func.isRequired
  }

  render () {

    const { onClickNew } = this.props;

    return (
      
      <div className={styles.stack}>

        <h1 className={styles.heading}>
          Projects
        </h1>

        <div style={{ width: 10 }} />

        <Button type="primary" onClick={onClickNew}>
          New Project
        </Button>

      </div>
      
    )
  }
}