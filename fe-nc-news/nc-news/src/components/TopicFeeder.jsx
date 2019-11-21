import React from "react";
import { Link } from "@reach/router";
import Header from "../components/Header";
import * as api from "../api";

export default class TopicFeeder extends React.Component {
  state = {
    topics: []
  };

  render() {
    return (
      <>
        <header>
          <Header user={this.props.user} />
        </header>
        <main>
          {this.state.topics.map(topic => {
            return (
              <Link
                to="/topic/articles"
                state={{ slug: topic.slug, desc: topic.description }}
              >
                <li>
                  <p>{topic.slug}</p>
                  <p>{topic.description}</p>
                </li>
              </Link>
            );
          })}
        </main>
      </>
    );
  }

  componentDidMount() {
    api.fetchTopics().then(topics => {
      this.setState({ topics: topics });
    });
  }
}
