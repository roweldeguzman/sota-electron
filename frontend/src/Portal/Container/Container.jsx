// @flow
import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
import StartupScreen from '../Screens/Startup';
import LoginScreen from '../Screens/Login';

type Props = {
  componentWillMount: () => void,
  isStarting: boolean,
  headerButtons: any,
  children:? React.Node
};

export default class Container extends React.Component<Props> {

  componentWillMount = () => this.props.componentWillMount()

  render () {
    
    const { isStarting, headerButtons, children } = this.props;

    return (

      <Wrapper>

        {isStarting && <StartupScreen />}

        {!isStarting && (

          <React.Fragment>
            
            <Header headerButtons={headerButtons} />

            <Switch>

              <Redirect exact from="/" to="/login" />

              <Route path="/login" component={LoginScreen} exact />
                
              <Route path="/portal/" render={() => children} />
              
            </Switch>

          </React.Fragment>

        )}

      </Wrapper>

    )
  }
}