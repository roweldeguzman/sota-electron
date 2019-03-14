import { connect } from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  jobs: state.screens.Jobs.jobs
});

const actionCreators = { };

export default connect(mapStateToProps, actionCreators)(Component);
