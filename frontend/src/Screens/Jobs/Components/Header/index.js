import { connect } from 'react-redux';
import Component from './Component';

import project from './Selectors/project';
import userIsClient from '../../../../Core/Selectors/userIsClient';

import onClickNew from './Handlers/onClickNew';

const mapStateToProps = (state) => ({
  project: project(state),
  userIsClient: userIsClient(state)
});

const actionCreators = {
  onClickNew
};

export default connect(mapStateToProps, actionCreators)(Component);
