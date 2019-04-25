import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class DogsForm extends Component {
  handleCancel = () => {
    const { history } = this.props;
    history.push("/dogs");
  };
  render() {
    const { dog, onChangeName, onChangeDescription, onSubmit } = this.props;
    return (
      <div>
        Name:
        <input value={dog.name} onChange={onChangeName} />
        Description:
        <input value={dog.description} onChange={onChangeDescription} />
        <button onClick={onSubmit}>Submit</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    );
  }
}
export default withRouter(DogsForm);
