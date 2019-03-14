import * as React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd'

export default class extends React.PureComponent {

  static propTypes = {
    projects: PropTypes.array.isRequired,

    onClickEdit: PropTypes.func.isRequired
  }

  render() {

    const {
      projects,
      onClickEdit
    } = this.props;
    
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: (text, record) => (
          <a role="presentation" onClick={() => onClickEdit(record)}>
            { text }
          </a>
        )
      }
    ]
    return (
      <Table
        dataSource={projects}
        columns={columns} 
        rowKey={record => record.id}
        pagination={{
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '30', '40', '50']
        }}
        bordered
      />
    )
  }
}