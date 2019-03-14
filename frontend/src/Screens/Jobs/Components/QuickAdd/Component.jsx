import * as React from 'react';
import PropTypes from 'prop-types';

import Fields from './Components/Fields';

export default class extends React.PureComponent {

  static propTypes = {
    projects: PropTypes.array.isRequired,
    submitting: PropTypes.bool,

    handleSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {
    submitting: false
  }

  render () {

    const {
      projects,
      submitting,
      handleSubmit
    } = this.props;

    return (

      <Fields
        projects={projects}
        submitting={submitting}
        handleSubmit={handleSubmit}
      />

    )
  }
}
