import React, { Component } from "react";
import { FetchDog } from "./../../../utils";

class DogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { dog: null };
  }
  componentDidMount() {
    const { id } = 1;
    FetchDog(id).then(data => {
      this.setState({
        dog: data
      });
    });
  }
  render() {
    const { dog } = this.state;
    if (!dog) return null;
    return (
      <div>
        <h1>{dog.name}</h1>
        <div>{dog.description}</div>
      </div>
    );
  }
}
export default DogDetails;
