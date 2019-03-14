import * as React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';

import Header from './Components/Header';
import Table from './Components/Table';

export default class extends React.PureComponent {

  static propTypes = {
    client: PropTypes.object,

    onClickNew: PropTypes.func.isRequired,
    onClickEdit: PropTypes.func.isRequired
  }

  static defaultProps = {
    client: null
  }
  
  render () {

    const {
      client,
      onClickNew,
      onClickEdit
    } = this.props;

    return (

      <div>
        
        <Divider />

        <Header onClickNew={onClickNew} />

        <Table
          projects={client.projects}
          onClickEdit={onClickEdit}
        />

      </div>

    )
  }
}