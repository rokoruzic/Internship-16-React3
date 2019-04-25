import React, { Component } from "react";
import { FetchDogs } from "./../../../utils";

class Dogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    };
  }
  componentDidMount() {
    FetchDogs().then(data => {
      this.setState({
        dogs: data
      });
    });
  }
  render() {
    const { dogs } = this.state;
    return (
      <div>
        {dogs.map(dog => (
          <div key={dog.id}> {dog.name} </div>
        ))}
      </div>
    );
  }
}
export default Dogs;
