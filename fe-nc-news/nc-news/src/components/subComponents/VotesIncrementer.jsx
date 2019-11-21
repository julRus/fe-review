import React from "react";
import * as api from "../../api";

export default class VotesIncrementer extends React.Component {
  state = {
    hasVotedUp: false,
    txt: "VOTE 👍"
  };
  render() {
    return (
      <>
        <button onClick={() => this.incrementVotes(this.props)}>
          <span role="img" aria-label="thumbsUp">
            {this.state.txt}
          </span>
        </button>
        <p>VOTE</p>
      </>
    );
  }

  incrementVotes(prop) {
    if (this.state.hasVotedUp === false) {
      if (prop.name === "articleVoter") {
        prop.displayVote(1, "voteChangeArticle");
        api.patchArticleVotes(prop.id, 1).then(article => {
          // need to set the state in Article.jsx to the returned article and display the result
          this.setState({ hasVotedUp: true, txt: "UNVOTE 👎" });
        });
      } else if (prop.name === "comments") {
        prop.displayVote(1, "voteChangeComment");
        api
          .patchArticleVotes(prop.id, 1, prop.name, prop.commentId)
          .then(article => {
            // need to set the state in Article.jsx to the returned article and display the result
            this.setState({ hasVotedUp: true, txt: "UNVOTE 👎" });
          });
      }
    } else {
      if (prop.name === "articleVoter") {
        prop.displayVote(0, "voteChangeArticle");
        api.patchArticleVotes(prop.id, -1).then(article => {
          this.setState({ hasVotedUp: false, txt: "VOTE 👍" });
        });
      } else if (prop.name === "comments") {
        prop.displayVote(0, "voteChangeComment");
        api
          .patchArticleVotes(prop.id, -1, prop.name, prop.commentId)
          .then(article => {
            // need to set the state in Article.jsx to the returned article and display the result
            this.setState({ hasVotedUp: false, txt: "VOTE 👍" });
          });
      }
    }
  }
}