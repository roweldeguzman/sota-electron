import * as React from 'react';
import PropTypes from 'prop-types';
import Item from './Components/Item';
import styles from './Component.css';

export default class extends React.PureComponent {

  static propTypes = {
    jobs: PropTypes.array.isRequired
  }

  render () {

    const { jobs } = this.props;

    return (
      
      <div className={styles.list}>

        {jobs.map(job => (

          <Item
            job={job}
            key={String(job.id)}
          />

        ))}

        {jobs.length === 0 && (

          <div className="ant-table-placeholder" style={{ height: 400 }}>
            No jobs to display
          </div>

        )}

      </div>

    )
  }
}