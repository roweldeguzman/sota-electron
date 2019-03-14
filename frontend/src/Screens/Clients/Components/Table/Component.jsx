import * as React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd'
import { NavLink } from 'react-router-dom';

export default class extends React.PureComponent {

  static propTypes = {
    clients: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
    fetching: PropTypes.bool.isRequired,

    onChangeTable: PropTypes.func.isRequired
  }

  render() {

    const {
      clients,
      pagination,
      fetching,

      onChangeTable
    } = this.props;
    
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: (text, record) => (
          <NavLink key={record.id} to={`/portal/clients/${record.id}/view`}>
            {text}
          </NavLink>
        )
      }
    ]
    return (
      <Table
        dataSource={clients}
        columns={columns} 
        rowKey={record => record.id}
        loading={fetching}
        onChange={onChangeTable}
        pagination={{
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '30', '40', '50'],
          ...pagination
        }}
        bordered
      />
    )
  }
}