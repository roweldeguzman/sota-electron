import * as React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

import Fields from './Components/Fields';
import Footer from './Components/Footer';

export default class extends React.PureComponent{

  static propTypes = {
    submitting: PropTypes.bool.isRequired,
    clientId: PropTypes.number,
    
    componentWillMount: PropTypes.func.isRequired,
    onClickCancel: PropTypes.func.isRequired
  }

  static defaultProps = {
    clientId: null
  }

  componentWillMount = () => this.props.componentWillMount(this.props);

  render () {

    const {
      submitting,
      clientId,
      onClickCancel
    } = this.props;

    return (
        
      <Modal
        visible  
        title={`${clientId ? 'Client': 'New Client'}`}        
        onCancel={onClickCancel}
        footer={<Footer submitting={submitting} clientId={clientId} />}
      >
        
        <Fields submitting={submitting} />

      </Modal>
    )
  }
}