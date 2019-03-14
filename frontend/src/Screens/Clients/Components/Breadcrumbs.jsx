import * as React from 'react';
import { Breadcrumb, Divider } from 'antd';

const { Item } = Breadcrumb;

export default () => (

  <React.Fragment>

    <Breadcrumb separator="»">

      <Item>
        Home
      </Item>

      <Item>
        Clients
      </Item>

    </Breadcrumb>
      
    <Divider />

  </React.Fragment>

)