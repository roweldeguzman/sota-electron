import * as React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';

import styles from './Component.css';

export default class extends React.PureComponent{

  static propTypes = {
    searchTerm: PropTypes.string.isRequired,

    onChangeSearch: PropTypes.func.isRequired,
    onSubmitSearch: PropTypes.func.isRequired,
    onClickNew: PropTypes.func.isRequired
  }

  render () {
    const {
      searchTerm,
      onSubmitSearch,
      onChangeSearch,
      onClickNew,
    } = this.props;

    return (

      <div className={styles.stack}>

        <h1 className={styles.heading}>
          Clients
        </h1>

        <Input.Search
          value={searchTerm}
          onChange={onChangeSearch}
          onSearch={onSubmitSearch}
          placeholder="Search"
          style={{ width: 250 }}
        />

        <div style={{ width: 10 }} />

        <Button type="primary" onClick={onClickNew}>
          New Client
        </Button>

      </div>

    )
  }
}