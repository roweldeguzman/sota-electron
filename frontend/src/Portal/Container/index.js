import { connect } from 'react-redux';
import Container from './Container';
import componentWillMount from '../Handlers/componentWillMount';
import { withConfig } from '../Contexts/ConfigContext';

const mapStateToProps = (state, props) => {
  const { isStarting } = state.status;
  const { config } = props;
  const headerButtons = typeof config.headerButtons === 'function' ? config.headerButtons(state) : config.headerButtons;
  return {
    isStarting,
    headerButtons
  }
}

const actionCreators = {
  componentWillMount
}

export default withConfig(connect(mapStateToProps, actionCreators)(Container));
