import { connect } from 'react-redux';

import Component from './Component';

const mapStateToProps = (state) => ({
  job: state.screens.JobView.job
});

const actionCreators = {};

export default connect(mapStateToProps, actionCreators)(Component);
