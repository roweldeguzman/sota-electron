import loadingIndicator from '../resources/images/loading.gif';
import loginLogo from '../resources/images/login-logo.png';
import headerLogo from '../resources/images/header-logo.png';


const deepBlue = '#183856';
const blue = '#0298FF';

export default {

  header: {
    barColor: deepBlue,
    logo: headerLogo
  },

  headerButtons: {
    textColorSelected: 'white',
    buttonColorSelected: blue
  },

  startup: {
    loadingIndicator
  },

  login: {
    brandingPanelColor: deepBlue,
    brandingPanelLogo: loginLogo,
    inputBorderColorFocused: blue,
    submitButtonColor: blue
  }

}