import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import onSubmit from './Form/onSubmit';
import onSubmitSuccess from './Form/onSubmitSuccess';
import onSubmitFail from './Form/onSubmitFail';
import Screen from './Screen';
import { withConfig } from '../../Contexts/ConfigContext';

const formConfig = {
  form: 'Login',
  onSubmit,
  onSubmitSuccess,
  onSubmitFail
}

const mapStateToProps = () => ({})

export default withConfig(connect(mapStateToProps)(reduxForm(formConfig)(Screen)));
