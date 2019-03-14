import * as React from 'react';
import { push } from 'connected-react-router';

export default class extends React.PureComponent {

  componentDidMount = () => this.props.dispatch(push('/portal/jobs'));

  render = () => <div />
  
}