import { connect } from 'react-redux';
import Component from './Component';

import componentWillMount from './Handlers/componentWillMount';
import onClickCancel from './Handlers/onClickCancel';

const mapStateToProps = () => ({});

const actionCreators = {
  componentWillMount,
  onClickCancel
};

export default connect(mapStateToProps, actionCreators)(Component);