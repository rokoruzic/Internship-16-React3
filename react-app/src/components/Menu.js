import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to={"/cats"}>
            {" "}
            <h1>Cats</h1>
          </Link>
        </div>
        <div>
          <Link to={"/dogs"}>
            {" "}
            <h1>Dogs</h1>
          </Link>
        </div>
      </div>
    );
  }
}
export default Menu;
