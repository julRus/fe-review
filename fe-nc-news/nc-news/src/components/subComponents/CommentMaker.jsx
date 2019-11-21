import React from "react";
// import Header from "../Header";
import * as api from "../../api";

export default class CommentMaker extends React.Component {
  state = {
    comment: { username: this.props.user.username, body: "" },
    hasCommented: true
  };
  render() {
    return (
      <>
        {/* <header>
          <Header user={this.props.user} />
        </header> */}
        <main>
          <form onSubmit={event => this.createComment(event)}>
            Post an Comment <br />
            <label>
              Comment Content
              <textarea
                rows="9"
                cols="50"
                required
                value={this.state.comment.body}
                onChange={event => this.handleChange(event)}
              ></textarea>
            </label>
            <button>Submit</button>
          </form>
        </main>
      </>
    );
  }

  handleChange(event) {
    const body = event.target.value;
    const user = this.props.user;
    this.setState({ comment: { username: user.username, body: body } });
  }

  createComment(event) {
    event.preventDefault();
    this.setState({
      comment: { username: null, body: "" },
      hasCommented: true
    });
    api.postComment(this.state.comment, this.props.article_id).then(comment => {
      this.props.addComment(comment.comment);
    });
  }

  // renderComment(comment) {
  //   this.setState(currentState => {
  //     const newState = (currentState = {
  //       ...this.state,
  //       comments: [...this.props.comments]
  //     });
  //     return newState;
  //   });
  //   console.log(this.state);
  // }
}
