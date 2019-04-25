import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CatsForm extends Component {
  handleCancel = () => {
    const { history } = this.props;
    history.push("/cats");
  };
  render() {
    const { cat, onChangeName, onChangeDescription, onSubmit } = this.props;
    return (
      <div>
        Name:
        <input value={cat.name} onChange={onChangeName} />
        Description:
        <input value={cat.description} onChange={onChangeDescription} />
        <button onClick={onSubmit}>Submit</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    );
  }
}
export default withRouter(CatsForm);
