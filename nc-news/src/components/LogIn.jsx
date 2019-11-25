import React from "react";
import Header from "./Header";
import SignUp from "./SignUp";

export default class LogIn extends React.Component {
  render() {
    return (
      <>
        <header>
          <Header user={this.props.user} />
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
          <SignUp user={this.props.user} />
        </main>
      </>
    );
  }
}
