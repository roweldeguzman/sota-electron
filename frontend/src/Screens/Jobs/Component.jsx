import * as React from "react";
import PropTypes from "prop-types";
import { Screen } from "evolve-portal";

import Header from "./Components/Header";
import Toolbar from './Components/Toolbar';
import Filter from './Components/Filter';
import List from './Components/List';
import QuickAdd from './Components/QuickAdd';
import Pagination from './Components/Pagination';

export default class extends React.PureComponent {

  static propTypes = {
    pagination: PropTypes.object.isRequired,
    userIsClient: PropTypes.bool.isRequired,
    componentDidMount: PropTypes.func.isRequired,
    componentDidUpdate: PropTypes.func.isRequired,
    componentWillUnmount: PropTypes.func.isRequired
  };

  componentDidMount = () => this.props.componentDidMount();

  componentDidUpdate = (prevProps) => this.props.componentDidUpdate(this.props, prevProps)

  componentWillUnmount = () => this.props.componentWillUnmount();
  
  render() {
    
    const {
      pagination,
      userIsClient
    } = this.props;

    return (

      <Screen>

        <Header />

        <Toolbar />

        <Filter />

        <List />
        
        {!userIsClient && (
          <QuickAdd />
        )}

        { pagination.total > 10 && (
          <Pagination />
        )}
        
      </Screen>

    );
  }
}
