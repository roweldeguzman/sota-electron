import * as React from 'react';
import { Col, Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';

const { Item } = Breadcrumb;

export default () => (
  <Col span={24} className="p-b-15">

    <Breadcrumb separator="»">

      <Item>
        Home
      </Item>

      <Item>
        <NavLink to="/portal/jobs">
          Job
        </NavLink>
      </Item>
      
      <Item>
        New
      </Item>

    </Breadcrumb>

  </Col>
)