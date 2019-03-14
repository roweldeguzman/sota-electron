import * as React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

import Header from './Components/Header';
import Details from './Components/Details';
import Footer from './Components/Footer';

export default class extends React.PureComponent{

  static propTypes = {    
    componentWillMount: PropTypes.func.isRequired,
    onClickCancel: PropTypes.func.isRequired
  }

  componentWillMount = () => this.props.componentWillMount(this.props);

  render () {

    const {
      onClickCancel
    } = this.props;

    return (
        
      <Modal
        visible
        width={700}
        title={<Header />}        
        footer={<Footer />}
        onCancel={onClickCancel}
      >
        
        <Details />

      </Modal>
    )
  }
}