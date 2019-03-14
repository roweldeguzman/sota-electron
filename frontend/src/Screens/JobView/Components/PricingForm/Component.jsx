import * as React from 'react';
import PropTypes from 'prop-types';

import Fields from './Components/Fields';

export default class extends React.PureComponent {

  static propTypes = {
    record: PropTypes.object.isRequired,
    priceType: PropTypes.string.isRequired,
    submitting: PropTypes.bool,

    componentDidMount: PropTypes.func.isRequired,
    onClickCancel: PropTypes.func.isRequired,
    onClickSave: PropTypes.func.isRequired,
    onClickClearPrice: PropTypes.func.isRequired
  }

  static defaultProps = {
    submitting: false
  }

  componentDidMount = () => this.props.componentDidMount(this.props);

  render () {

    const {
      record,
      priceType,
      submitting,
      onClickSave,
      onClickCancel,
      onClickClearPrice
    } = this.props;

    return (

      <Fields
        record={record}
        priceType={priceType}
        submitting={submitting}
        onClickSave={onClickSave}
        onClickCancel={onClickCancel}
        onClickClearPrice={onClickClearPrice}
      />
    );
      
  }
}
