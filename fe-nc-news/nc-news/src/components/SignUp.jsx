import React from "react";
import Header from "./Header";

export default class SignUp extends React.Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <form>
            SIGN UP <br />
            <label>
              Username
              <input type="text" />
            </label>
          </form>
        </main>
      </>
    );
  }
}
