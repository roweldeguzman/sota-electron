import * as React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';

const { Item } = Breadcrumb;

export default class extends React.PureComponent{

  static propTypes = {
    job: PropTypes.object.isRequired
  }

  render() {

    const { job } = this.props;

    return (

      <React.Fragment>

        <Breadcrumb separator="»">

          <Item>
            Home
          </Item>
          
          <Item>

            <NavLink to='/portal/jobs'>
              All Jobs
            </NavLink>

          </Item>

          <Item>

            <NavLink to='/portal/jobs'>
              { job.client.name}
            </NavLink>

          </Item>

          <Item>

            <NavLink to='/portal/jobs'>
              { job.project.name}
            </NavLink>

          </Item>

          <Item>
            { `${job.title}`}
          </Item>

        </Breadcrumb>
        
      </React.Fragment>

    )
  };
}