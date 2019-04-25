import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    };
  }
  componentDidMount() {
    fetch(" http://localhost:3000/dogs")
      .then(response => response.json())
      .then(data => {
        this.setState({
          dogs: data
        });
      });
  }
  render() {
    const { dogs } = this.state;
    return (
      <div>
        <div>
          {dogs.map(dog => (
            <div key={dog.id}>
              {" "}
              <Link to={`/dogs/${dog.id}`}>{dog.name} </Link>{" "}
            </div>
          ))}
        </div>
        <Link to="/dogs/create">
          {" "}
          <button>Add dog</button>
        </Link>
      </div>
    );
  }
}
export default Dogs;
