import { connect } from 'react-redux';
import Component from './Component';

import onChangeLane from './Handlers/onChangeLane';

const mapStateToProps = (state) => ({
  job: state.screens.JobView.job
});

const actionCreators = {
  onChangeLane
};

export default connect(mapStateToProps, actionCreators)(Component);
