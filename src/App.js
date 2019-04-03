import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRPC';
import Portal from './Portal';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                {on && <h1>Show me</h1>}
                <button onClick={toggle}>Show / Hide</button>
                <Portal>{on && <h1>Hi I'm from the portal</h1>}</Portal>
              </Fragment>
            )}
          </Toggle>
        </header>
      </div>
    );
  }
}

export default App;
