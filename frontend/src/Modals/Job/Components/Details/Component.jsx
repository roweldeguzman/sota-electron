import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import styles from './Component.css';

export default class extends React.PureComponent{

  static propTypes = {
    job: PropTypes.object
  }

  static defaultProps = {
    job: null
  }

  render () {

    const {
      job
    } = this.props;
    
    if (!job) return <Spin />

    return (
        
      <div className={styles.wrapper}>

        {(job && job.title) && (
          <div className={styles.title}>
            {job.title}
          </div>
        )}

        {(job && job.content) && (

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{__html: job.content}}
          />
          
        )}

      </div>

    )
  }
}