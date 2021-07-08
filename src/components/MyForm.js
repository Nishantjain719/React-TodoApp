import React from "react";

export default class MyForm extends React.Component {
  state = {
    name: "",
    rememberMe: false,
    title: "Mr.",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleCheckbox = (event) => {
    this.setState({ rememberMe: event.target.checked });
  };

  handleSelect = (event) => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.name} onChange={this.handleChange} />
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleCheckbox}
        />
        <div>
          <select value={this.state.title} onChange={this.handleSelect}>
            <option>Mr.</option>
            <option>Miss</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
