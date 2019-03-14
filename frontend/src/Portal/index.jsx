
import * as React from 'react';
import PropTypes from 'prop-types';
import { Provider as StoreProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { merge } from 'lodash';

import defaultConfig from './Config';
import ConfigContext from './Contexts/ConfigContext';
import Container from './Container';
import { configureStore, history } from './Utilities/configureStore';
import './global.css';

export default class Portal extends React.PureComponent {

  static propTypes = {
    config: PropTypes.object.isRequired,
    children: PropTypes.any.isRequired
  }

  render () {

    const { children } = this.props;
    
    const config = merge({}, defaultConfig, this.props.config);
    
    const store = configureStore(config.reducers);

    return (

      <ConfigContext.Provider value={config}>
        <StoreProvider store={store}>  
          <ConnectedRouter history={history}>        
            <Container>
              {children}
            </Container>
          </ConnectedRouter>
        </StoreProvider>
      </ConfigContext.Provider>

    )
  } 
}