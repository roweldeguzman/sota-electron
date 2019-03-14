import * as React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
import { Screen } from 'evolve-portal';

import Breadcrumb from './Components/Breadcrumb';
import Header from './Components/Header';
import Fields from './Components/Fields';

export default class extends React.PureComponent{

  static propTypes = {
    submitting: PropTypes.bool.isRequired,

    componentDidMount: PropTypes.func.isRequired    
  }

  componentDidMount = () => this.props.componentDidMount(this.props);

  render() {
    const {
      submitting
    } = this.props;

    return (

      <Screen>

        <Breadcrumb />
        
        <Divider type="horizontal" />
        
        <Header />

        <Fields submitting={submitting} />
                
      </Screen>

    )
  }
}