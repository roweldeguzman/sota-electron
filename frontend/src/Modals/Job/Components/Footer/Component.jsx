import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import moment from 'moment';
import { Button, Icon, Tooltip } from 'antd';
import styles from './Component.css';

export default class extends React.PureComponent{

  static propTypes = {
    job: PropTypes.object,
    userIsClient: PropTypes.bool.isRequired,
    onClickApprove: PropTypes.func.isRequired
  }

  static defaultProps = {
    job: null
  }

  render () {

    const {
      job,
      userIsClient,
      onClickApprove
    } = this.props;

    if (!job) return null;

    return (
        
      <div className={styles.wrapper}>

        <div className={styles.pricing}>

          {!job.price_type && (
            <div className={styles.awaitingPrice}>
              <Icon type="hourglass" />
              {' Awaiting Price'}
            </div>
          )}

          {job.price_type === 'Estimate' && (
            <div className={styles.estimate}>
              {`Price: £${numeral(job.estimate_lower_amount).format('0,0.00')} - £${numeral(job.estimate_upper_amount).format('0,0.00')}`}
            </div>
          )}

          {job.price_type === 'Quote' && (
            <div className={styles.quote}>
              {`Price: £${numeral(job.quote_amount).format('0,0.00')}`}
            </div>
          )}

        </div>
        
        {(!!job.price_type && !job.approved_at) && (
          <Button
            type="primary"
            icon="like"
            onClick={onClickApprove}
          >
            {userIsClient ? 'Approve' : 'Mark Approved'}
          </Button>
        )}
        
        {(!!job.price_type && job.approved_at) && (
          <Tooltip
            placement="bottom"
            title={moment(job.approved_at).format('MMM DD, YYYY h:mma')}
          >
            <div className={styles.approvedBy}>
              <Icon type="check-circle" theme="filled" className={styles.approvedIcon} />
              {`${job.approved_by_user.type === 'Client' ? 'Approved by' : 'Marked as Approved by'} ${job.approved_by_user.first_name} ${job.approved_by_user.last_name}`}
            </div>
          </Tooltip>
        )}

      </div>

    )
  }
}