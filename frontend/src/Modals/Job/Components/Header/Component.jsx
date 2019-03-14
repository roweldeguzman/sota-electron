import React from 'react';
import PropTypes from 'prop-types';
import styles from './Component.css';
import lanes from '../../../../Core/Misc/lanes';

export default class extends React.PureComponent {

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
    
    if (!job) return null;

    return (
        
      <div className={styles.header}>

        <div className={styles.lane} style={{ color: lanes[`LANE_${job.lane_key}`].color, borderColor: lanes[`LANE_${job.lane_key}`].color }}>
          { lanes[`LANE_${job.lane_key}`].name }
        </div>

        {`${job.client.name} - ${job.project.name} • #${job.id}`}

      </div>

    )
  }
}