import React, { Component } from 'react';
import { UserContext } from './UserContext';
export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div>
            <h1>User info:</h1>
            <h1>
              {context.user.name} <br />
              email: {context.user.email}
            </h1>
            <button onClick={context.logout}>Hide Info</button>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
