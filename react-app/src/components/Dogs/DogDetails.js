import React, { Component } from "react";
import { Link } from "react-router-dom";

class DogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { dog: null };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(` http://localhost:3000/dogs/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          dog: data
        });
      });
  }
  handleDelete = () => {
    const { id } = this.props.match.params;
    const { history } = this.props;

    fetch(` http://localhost:3000/dogs/${id}`, {
      method: "DELETE"
    }).then(response => response.json());
    history.push("/dogs");
  };
  render() {
    const { dog } = this.state;
    if (!dog) return null;
    return (
      <div>
        <h1>{dog.name}</h1>
        <div>{dog.description}</div>
        <Link to={`/dogs/edit/${dog.id}`}>
          {" "}
          <button>Edit dog</button>
        </Link>
        <button onClick={this.handleDelete}>Delete dog</button>
      </div>
    );
  }
}
export default DogDetails;
