import React, { Component } from "react";
import DogsForm from "./DogsForm";
class DogCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: { name: "", description: "" }
    };
  }

  handleChangeName = event => {
    this.setState({
      dog: { name: event.target.value, description: this.state.dog.description }
    });
  };
  handleChangeDescription = event => {
    this.setState({
      dog: { name: this.state.dog.name, description: event.target.value }
    });
  };
  handleSubmit = () => {
    const { dog } = this.state;
    const { history } = this.props;
    fetch(`http://localhost:3000/dogs/`, {
      method: "POST",
      body: JSON.stringify(dog),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(resp => {
        history.push(`/dogs/${resp.id}`);
      });
  };
  render() {
    var { dog } = this.state;
    return (
      <div>
        <DogsForm
          dog={dog}
          onChangeName={this.handleChangeName}
          onChangeDescription={this.handleChangeDescription}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default DogCreate;
