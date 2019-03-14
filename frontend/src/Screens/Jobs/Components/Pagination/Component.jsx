/* eslint-disable react/prefer-stateless-function, react/jsx-one-expression-per-line */
import * as React from 'react';
import PropTypes from 'prop-types'
import { Pagination } from 'antd'

import styles from './Component.css';

export default class extends React.PureComponent{

  static propTypes = {
    pagination: PropTypes.object.isRequired,
    onChangePagination: PropTypes.func.isRequired
  }

  render () {

    const {
      pagination,
      onChangePagination
    } = this.props;

    const ItemRender = (current, type, originalElement) => {
      if (type === 'prev') {
        return <a className={styles.pageControl}>Prev</a>;
      } if (type === 'next') {
        return <a className={styles.pageControl}>Next</a>;
      }
      return originalElement;
    }
    return (

      <div className={styles.customPagination}>
      
        <Pagination
          {...pagination}
          onChange={onChangePagination}
          itemRender={ItemRender}
        />

      </div>
      
    )
  }
}