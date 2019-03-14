import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd'
import { NavLink } from 'react-router-dom';
import styles from './Component.css';

export default class extends React.PureComponent {

  static propTypes = {
    project: PropTypes.object,
    userIsClient: PropTypes.bool.isRequired,
    onClickNew: PropTypes.func.isRequired
  }

  static defaultProps = {
    project: null
  }

  render () {

    const {
      project,
      userIsClient,
      onClickNew
    } = this.props;

    return (

      <div className={styles.wrapper}>

        <div className={styles.left}>

          {!!project && (
            <div className={styles.backLink}>
              <NavLink to='/portal/jobs'>
                ← Back to All Jobs
              </NavLink>
            </div>
          )}

          <h1 className={styles.heading}>
            
            {!project && 'All Jobs'}

            {!!project && `${project.client.name} - ${project.name}`}

          </h1>

        </div>

        <div className={styles.right}>
          
          {!userIsClient && (
            <NavLink to='/portal/jobs/new'>
              <Button
                type="primary"
                size="large"
                onClick={onClickNew}
              >
                New Job
              </Button>
            </NavLink>
          )}

        </div>

      </div>
      
    )
  }
}