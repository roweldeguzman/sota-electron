/* eslint-disable react/prefer-stateless-function, react/jsx-one-expression-per-line */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Button, Divider, Select } from 'antd'
import moment from 'moment';

import Breadcrumb from '../Breadcrumbs';
import styles from './Component.css';

export default class extends React.PureComponent{

  static propTypes = {
    job: PropTypes.object.isRequired,
    onChangeLane: PropTypes.func.isRequired
  }

  render () {
    
    const { job, onChangeLane } = this.props;

    const { Option } = Select;
    const laneOptions = [
      {key: 1, value: "Requested"},
      {key: 2, value: "Next up"},
      {key: 3, value: "In Progress"},
      {key: 4, value: "Done"},
      {key: 5, value: "Closed"}
    ].map(lane => (<Option key={String(lane.key)}>{lane.value}</Option>))

    return (

      <React.Fragment>

        <Breadcrumb job={job} />

        <div className={styles.stack}>

          <div className={styles.heading}>

            <Select
              defaultValue={job.lane_key}
              className={styles.laneOptions}
              onChange={onChangeLane}
            >
              { laneOptions }
            </Select>

            { `Opened ${moment(job.created_at).fromNow()} by Someone` }
          </div>

          <div style={{ width: 10 }} />

          <Button className={styles.button} onClick={() => null}>
            New Job
          </Button>

        </div>

        <Divider type="horizontal" />
        
      </React.Fragment>
      
    )
  }
}