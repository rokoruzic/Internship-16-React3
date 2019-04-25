import React, { Component } from "react";
import { Link } from "react-router-dom";

class CatDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { cat: null };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(` http://localhost:3000/cats/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          cat: data
        });
      });
  }
  handleDelete = () => {
    const { id } = this.props.match.params;
    const { history } = this.props;

    fetch(` http://localhost:3000/cats/${id}`, {
      method: "DELETE"
    }).then(response => response.json());
    history.push("/cats");
  };
  render() {
    const { cat } = this.state;
    if (!cat) return null;
    return (
      <div>
        <h1>{cat.name}</h1>
        <div>{cat.description}</div>
        <Link to={`/cats/edit/${cat.id}`}>
          {" "}
          <button>Edit cat</button>
        </Link>
        <button onClick={this.handleDelete}>Delete cat</button>
      </div>
    );
  }
}
export default CatDetails;
