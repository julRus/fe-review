import React from "react";
import * as api from "../api";
import Header from "./Header";

import CommentCard from "./subComponents/CommentCard";
import VotesIncrementer from "./subComponents/VotesIncrementer";
import ErrorShower from "../components/ErrorShower";
import { Link } from "@reach/router";
import CommentMaker from "./subComponents/CommentMaker";

export default class Article extends React.Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
    err: null,
    voteChangeArticle: 0,
    voteChangeComment: 0,
    hasCommented: false
  };

  render() {
    // console.log(this.state.comments[0]);
    if (this.state.isLoading) return <p>Loading...</p>;
    if (this.state.err !== null) return <ErrorShower err={this.state.err} />;
    const { title, created_at, author, votes, body } = this.state.article;
    const { comments } = this.state;
    return (
      <>
        <header>
          {" "}
          <Header user={this.props.user} />
        </header>
        <main>
          <div>
            <div>
              <h4>{title}</h4>
              <VotesIncrementer
                articleVotes={this.state.article.votes}
                id={this.state.article.article_id}
                displayVote={this.handleVoteChange}
                name="articleVoter"
              />
            </div>

            <p>{created_at}</p>
            <p>{author}</p>
            <p>{(votes + this.state.voteChangeArticle).toString()}</p>
            <p>{body}</p>
          </div>
          <div>
            Comments
            <section>
              <CommentMaker
                user={this.props.user}
                article_id={this.state.article.article_id}
                comments={this.state.comments}
                addComment={this.addComment}
              />
              <Link to="/post_comment"> Post A Comment</Link>
            </section>
            <ul>
              {comments.map(comment => {
                return (
                  <div key={comment.comment_id}>
                    <CommentCard
                      key={comment.comment_id}
                      id={comment.comment_id}
                      author={comment.author}
                      body={comment.body}
                      date={comment.created_at}
                      votes={comment.votes + this.state.voteChangeComment}
                    />{" "}
                    <button
                      onClick={() =>
                        this.deletionChecker(comment.author, comment.comment_id)
                      }
                    >
                      DELETE
                    </button>
                    <VotesIncrementer
                      commentVotes={comment.votes}
                      commentId={comment.comment_id}
                      displayVote={this.handleVoteChange}
                      name="comments"
                    />
                  </div>
                );
              })}
            </ul>
          </div>
        </main>
      </>
    );
  }

  componentDidMount() {
    this.fetchArticle(this.props.article_id);
    this.fetchComments(this.props.article_id);
  }

  fetchArticle(id) {
    api
      .getArticleById(id)
      .then(article => {
        this.setState({ article: article, isLoading: false });
      })
      .catch(err => {
        this.setState({
          err: { status: err.response.status, msg: err.response.data.msg },
          isLoading: false
        });
      });
  }

  fetchComments(id) {
    api
      .getArticleComments(id)
      .then(comments => {
        this.setState({ comments: comments, isLoading: false });
      })
      .catch(err => {
        this.setState({
          err: {
            status: 400,
            msg: `cannot get article of id ${id}, does not exist`
          },
          isLoading: false
        });
      });
  }

  handleVoteChange = (amnt, value) => {
    this.setState({ [value]: amnt });
  };

  deletionChecker(author, id) {
    console.log(id);
    if (author === this.props.user.username) {
      const willDelete = window.confirm(
        "Are you sure you want to delete this comment?"
      );
      if (willDelete) {
        api.deleteComment(author, id);
        this.deletedComment();
      } else {
        alert("deletion cancelled");
      }
    }
  }

  deletedComment() {
    this.setState(currentState => {
      const newState = { ...this.sate, comments: this.state.comments };
      newState.comments.shift();
      return newState;
    });
  }

  addComment = comment => {
    this.setState(currentState => {
      const newState = { ...this.sate, comments: this.state.comments };
      newState.comments.unshift(comment);
      return newState;
    });
  };
}
