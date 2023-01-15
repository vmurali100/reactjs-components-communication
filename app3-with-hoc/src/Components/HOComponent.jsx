import React from "react";
import { Component } from "react";

const HOComponent = (WrappedComponent) => {
  return class HOComponent extends Component {
    state = { users: null };
    async componentDidMount() {
      const response = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
      ).json();
      this.setState({ users: response });
    }
    render() {
      return <WrappedComponent users={this.state.users} />;
    }
  };
};

export default HOComponent;
