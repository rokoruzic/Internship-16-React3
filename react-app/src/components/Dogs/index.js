import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DogCreate from "./DogCreate";
import DogDetails from "./DogDetails";
import DogEdit from "./DogEdit";
import DogsList from "./DogsList";

class Dogs extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/dogs" render={props => <DogsList {...props} />} />
          <Route
            exact
            path="/dogs/create"
            render={props => <DogCreate {...props} />}
          />
          <Route
            exact
            path="/dogs/edit/:id"
            render={props => <DogEdit {...props} />}
          />
          <Route
            exact
            path="/dogs/:id"
            render={props => <DogDetails {...props} />}
          />
        </Switch>
      </div>
    );
  }
}
export default Dogs;
