import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    };
  }
  componentDidMount() {
    fetch(" http://localhost:3000/cats")
      .then(response => response.json())
      .then(data => {
        this.setState({
          cats: data
        });
      });
  }
  render() {
    const { cats } = this.state;
    return (
      <div>
        <div>
          {cats.map(cat => (
            <div key={cat.id}>
              {" "}
              <Link to={`/cats/${cat.id}`}>{cat.name} </Link>{" "}
            </div>
          ))}
        </div>
        <Link to="/cats/create">
          {" "}
          <button>Add Cat</button>
        </Link>
      </div>
    );
  }
}
export default Cats;
