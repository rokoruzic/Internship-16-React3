import React, { Component } from "react";
import DogsForm from "./dogsForm";
class DogEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: { name: "", description: "" }
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://localhost:3000/dogs/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          dog: data
        });
      });
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
    const { id } = this.props.match.params;

    fetch(`http://localhost:3000/dogs/${id}`, {
      method: "PUT",
      body: JSON.stringify(dog),
      headers: {
        "Content-Type": "applidogion/json"
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
export default DogEdit;
