import * as React from 'react';
import PropTypes from 'prop-types';

import Fields from './Components/Fields';

export default class extends React.PureComponent {

  static propTypes = {
    submitting: PropTypes.bool,
    
    componentDidMount: PropTypes.func.isRequired,
    onClickCancel: PropTypes.func.isRequired,
    onClickSave: PropTypes.func.isRequired
  }

  static defaultProps = {
    submitting: false
  }

  componentDidMount = () => this.props.componentDidMount(this.props);

  render () {

    const {
      submitting,
      onClickSave,
      onClickCancel
    } = this.props;

    return (

      <Fields
        submitting={submitting}
        onClickSave={onClickSave}
        onClickCancel={onClickCancel}
      />
    );
      
  }
}
