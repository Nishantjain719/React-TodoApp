import React from "react";

export default class FetchUser extends React.Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }
  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (!this.state.people) {
      return <div>didn't get a person</div>;
    }

    const fivePeople = this.state.people.map((person) => (
      <div key={person.login.uuid}>
        <div>{person.name.first}</div>
        <img src={person.picture.large} />
      </div>
    ));

    return <div>{fivePeople}</div>;
  }
}
