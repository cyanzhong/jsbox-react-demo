import React from "react";
import ReactDOM from "react-dom";
import ReactLogo from "../assets/logo.png";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <div className="Container">
        <header className="Header">
          <img src={ReactLogo} className="React-logo" alt="logo" />
          <p>Hello, World!</p>
          <a
            className="Link"
            href="https://reactjs.org/docs/getting-started.html"
          >
            Getting Started
          </a>
        </header>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));