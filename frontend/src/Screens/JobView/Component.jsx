import * as React from "react";
import PropTypes from "prop-types";
import { Screen } from "evolve-portal";

import Breadcrumbs from "./Components/Breadcrumbs";
import Header from './Components/Header';
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import ContentEditor from './Components/ContentEditor';

export default class extends React.PureComponent {
  static propTypes = {
    job: PropTypes.object,
    editMode: PropTypes.object.isRequired,

    componentDidMount: PropTypes.func.isRequired,
    componentWillUnmount: PropTypes.func.isRequired
  };

  static defaultProps = {
    job: null
  };

  componentDidMount = () => this.props.componentDidMount(this.props);

  componentWillUnmount = () => this.props.componentWillUnmount();

  render() {
    const {
      job,
      editMode
    } = this.props;

    if (!job) return null;

    return (

      <Screen style={{ marginRight: 280, paddingRight: 30 }}>
        
        {/* <Breadcrumbs job={job} /> */}

        <Header />

        <Sidebar />

        {!editMode.content && (
          <Content />
        )}

        {editMode.content && (
          <ContentEditor />
        )}

      </Screen>
      
    );
  }
}
