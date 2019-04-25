import React from "react";
import { Route, BrowserRouter, Switch, Redirect} from "react-router-dom";
import Cats from "./components/Cats";
import Dogs from "./components/Dogs";
import Menu from "./components/Menu";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/cats" render={props => <Cats {...props} />} />
            <Route path="/menu" render={props => <Menu {...props} />} />
            <Route path="/dogs" render={props => <Dogs {...props} />} />
            <Redirect from="/" to="/menu" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
