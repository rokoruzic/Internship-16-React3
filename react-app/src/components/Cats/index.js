import React, { Component } from "react";
import { Route, Switch,Redirect } from "react-router-dom";
import CatCreate from "./CatCreate";
import CatDetails from "./CatDetails";
import CatEdit from "./CatEdit";
import CatsList from "./CatsList";

class Cats extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/cats" render={props => <CatsList {...props} />} />
          <Route
            exact
            path="/cats/create"
            render={props => <CatCreate {...props} />}
          />
          <Route
            exact
            path="/cats/edit/:id"
            render={props => <CatEdit {...props} />}
          />
          <Route
            exact
            path="/cats/:id"
            render={props => <CatDetails {...props} />}
          />

        </Switch>
      </div>
    );
  }
}
export default Cats;
