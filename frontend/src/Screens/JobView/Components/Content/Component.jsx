/* eslint-disable react/no-danger */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';


import styles from "./Component.css";

export default class extends React.PureComponent {

  static propTypes = {
    job: PropTypes.object.isRequired,
    onClickEdit: PropTypes.func.isRequired
  }

  render () {

    

    const { job, onClickEdit } = this.props;
    
    return (
      <div>

        <div className={styles.stack}>
          
          <h2 className={styles.heading}>
            {job.title}
          </h2>

          <Button icon="edit" type="default" onClick={onClickEdit} />
        </div>

        <div dangerouslySetInnerHTML={{__html: job.content}} />

      </div>

    )
  }
}