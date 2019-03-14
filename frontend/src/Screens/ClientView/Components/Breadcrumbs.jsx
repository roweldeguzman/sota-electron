import * as React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Divider } from 'antd';
import { NavLink } from 'react-router-dom';

const { Item } = Breadcrumb;

export default class extends React.PureComponent{

  static propTypes = {
    client: PropTypes.object.isRequired
  }

  render() {

    const { client } = this.props;

    return (

      <React.Fragment>

        <Breadcrumb separator="»">

          <Item>
            Home
          </Item>
          
          <Item>

            <NavLink to='/portal/clients'>
              client
            </NavLink>

          </Item>

          <Item>
            { `${client.name}`}
          </Item>

        </Breadcrumb>

        <Divider type="horizontal" />
        
      </React.Fragment>

    )
  };
}