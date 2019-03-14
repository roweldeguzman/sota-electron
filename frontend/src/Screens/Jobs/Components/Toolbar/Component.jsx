/* eslint-disable react/prefer-stateless-function */

import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Component.css';

export default class extends React.PureComponent {

  static propTypes = {
    activeTab: PropTypes.number.isRequired,
    onChangeTab: PropTypes.func.isRequired
  }

  render () {

    const {
      activeTab,
      onChangeTab
    } = this.props;

    const tabList = [
      { label: 'All', value: 0 },
      { label: 'Requested', value: 1 },
      { label: 'Next up', value: 2 },
      { label: 'In Progress', value: 3 },
      { label: 'Done', value: 4 },
      { label: 'Closed', value: 5 }
    ]

    return (
      
      <div className={styles.wrapper}>

        <div className={styles.list}>

          { tabList.map(tab => (

            <div
              className={activeTab === tab.value ? styles.active : ''}
              onClick={() => onChangeTab(tab.value)}
              role="presentation"
              key={tab.label}
            >

              { tab.label }

              <div className={styles.counter}>
                0
              </div>

            </div>

          ))}

        </div>

      </div>

    )
  }
}