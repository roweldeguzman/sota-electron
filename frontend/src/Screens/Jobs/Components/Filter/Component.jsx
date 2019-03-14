import * as React from 'react';
import PropTypes from 'prop-types';
import { Input, Select, Button, Icon } from 'antd';

import styles from './Component.css';

export default class extends React.PureComponent{

  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    sortingOrder: PropTypes.string.isRequired,
    onChangeSearch: PropTypes.func.isRequired,
    onSubmitSearch: PropTypes.func.isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onChangeSortDirection: PropTypes.func.isRequired,
  }

  render () {

    const {
      searchTerm,
      sortingOrder,
      onChangeSearch,
      onSubmitSearch,
      onChangeSort,
      onChangeSortDirection
    } = this.props;

    return (

      <div className={styles.wrapper}>

        <div className={styles.searchContainer}>

          <Input.Search
            value={searchTerm}
            onChange={onChangeSearch}
            onSearch={onSubmitSearch}
            placeholder="Search Jobs ..."
          />
          
        </div>

        <div style={{ width: 10 }} />

        <Button.Group>
          
          <Select
            onChange={onChangeSort}
            className={styles.sortingInput}
            defaultValue="created_at"
          >
            <Select.Option value="created_at">
              Created date
            </Select.Option>
            <Select.Option value="updated_at">
              Last Updated
            </Select.Option>
          </Select>

          <Button type="default" onClick={onChangeSortDirection} style={{ borderLeft: 'none' }}>
            <Icon type={sortingOrder === 'descend' ? "arrow-down" : "arrow-up"} theme="filled" />
          </Button>
          
        </Button.Group>

      </div>
      
    )
  }
}