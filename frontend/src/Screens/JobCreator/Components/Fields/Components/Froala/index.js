import { connect } from 'react-redux';

import Component from './Component';

import onChangeEditor from './Handlers/onChangeEditor';

const mapStateToProps = () => ({});

const actionCreators = {
  onChangeEditor
};

export default connect(mapStateToProps, actionCreators)(Component);
