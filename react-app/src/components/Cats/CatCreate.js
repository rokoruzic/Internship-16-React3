import React, { Component } from "react";
import CatsForm from "./CatsForm";
class CatCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: { name: "", description: "" }
    };
  }

  handleChangeName = event => {
    this.setState({
      cat: { name: event.target.value, description: this.state.cat.description }
    });
  };
  handleChangeDescription = event => {
    this.setState({
      cat: { name: this.state.cat.name, description: event.target.value }
    });
  };
  handleSubmit = () => {
    const { cat } = this.state;
    const { history } = this.props;
    fetch(`http://localhost:3000/cats/`, {
      method: "POST",
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(resp => {
        history.push(`/cats/${resp.id}`);
      });
  };
  render() {
    var { cat } = this.state;
    return (
      <div>
        <CatsForm
          cat={cat}
          onChangeName={this.handleChangeName}
          onChangeDescription={this.handleChangeDescription}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default CatCreate;
