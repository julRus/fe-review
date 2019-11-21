import React from "react";
import Header from "./Header";

export default class LogIn extends React.Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <form>
            LogIn <br />
            <label>
              Username
              <input type="text" />
            </label>{" "}
            <br />
            <label>
              Password
              <input type="password" />
            </label>{" "}
            <br />
            <button>Log In</button>
          </form>
        </main>
      </>
    );
  }
}
