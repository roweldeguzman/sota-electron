import * as React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import moment from 'moment';
import { Tooltip, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

import styles from './Item.css';

export default class extends React.PureComponent {

  static propTypes = {
    job: PropTypes.object.isRequired
  }

  render () {

    const { job } = this.props;

    return (

      <div className={styles.item}>
      
        <div className={styles.stack}>

          <h4 className={styles.jobTitle}>

            <NavLink to={`/portal/jobs/${job.id}/view`}>
              { job.title }
            </NavLink>

          </h4>

          <div className={styles.lane}>
            { job.lane }
          </div>
          
        </div>

        <div className={styles.stack}>

          <div className={styles.projectName}>

            <NavLink to={`/portal/jobs?projectId=${job.project_id}`}>
              {`${job.client.name} - ${job.project.name}`}
            </NavLink>

            {` • #${job.id} • `}

            {`Opened `}

            <Tooltip
              placement="bottom"
              title={moment(job.created_at).format('MMM DD, YYYY h:mma')}
            >
              {`${moment(job.created_at).fromNow()}`}
            </Tooltip>

            {` by Someone`}
            
          </div>

          { !job.price_type && (
            <div>
              { 'Awaiting Price' }
            </div>
          )}

          { job.price_type && (
            <div className={styles.price}>
              { `${job.price_type}: ` }

              { job.price_type === "Estimate" && (
                <span>
                  { `£ ${numeral(job.estimate_lower_amount).format('0,0.00')} - £ ${numeral(job.estimate_upper_amount).format('0,0.00')}` }
                </span>
              )}

              { job.price_type === "Quote" && (
                <span>
                  {`£ ${numeral(job.quote_amount).format('0,0.00')}`}
                </span>
              )}

            </div>            
          )}

          { job.price_type && job.approved_at && (
            <Icon type="check-circle" theme="filled" className={styles.approvedIcon} />
          )}
          
        </div>
        
        
      </div>

    );

  }
}