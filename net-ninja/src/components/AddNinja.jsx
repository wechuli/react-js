import React, { Component } from "react";

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  };

  handlechange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNinja(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={this.handlechange} />
          <label htmlFor="age">Age: </label>
          <input type="text" id="age" onChange={this.handlechange} />
          <label htmlFor="belt">Belt: </label>
          <input type="text" id="belt" onChange={this.handlechange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;
