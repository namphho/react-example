import "./App.css";
import React, { Component, Fragment } from "react";
import NavBar from "../feature/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import RegBossForm from "../feature/home/RegBossForm/RegBossForm";
import RegEmployeeFrom from "../feature/home/RegEmployeeForm/RegEmployeeFrom";
import testComponent from "../feature/testarea/testComponent";

class App extends Component {
  render() {
    return (
      <Fragment>
      <NavBar />
      <Container className="main">
        <Route path="/boss" component={RegBossForm} />
        <Route path="/employee" component={RegEmployeeFrom} />
        <Route path="/test" component={testComponent} />
      </Container>
    </Fragment>
    );
  }
}
export default App;
