import * as React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

import Fields from './Components/Fields';
import Footer from './Components/Footer';

export default class extends React.PureComponent{

  static propTypes = {
    submitting: PropTypes.bool.isRequired,
    projectId: PropTypes.number,
    
    componentWillMount: PropTypes.func.isRequired,
    onClickCancel: PropTypes.func.isRequired
  }

  static defaultProps = {
    projectId: null
  }

  componentWillMount = () => this.props.componentWillMount(this.props);

  render () {

    const {
      submitting,
      projectId,
      onClickCancel
    } = this.props;

    return (
        
      <Modal
        visible  
        title={`${projectId ? 'Project': 'New Project'}`}        
        onCancel={onClickCancel}
        footer={<Footer submitting={submitting} projectId={projectId} />}
      >
        
        <Fields submitting={submitting} />

      </Modal>
    )
  }
}