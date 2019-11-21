import React from "react";
import Header from "../components/Header";
import ArticleFeeder from "./ArticleFeeder";

export default class TopicArticles extends React.Component {
  render() {
    const { slug, desc } = this.props.location.state;
    return (
      <>
        <header>
          <Header user={this.props.user} />
        </header>
        <main>
          <section className="Topic">
            <p>{slug}</p>
            <p>{desc}</p>
            <ArticleFeeder slug={slug} />
          </section>
        </main>
      </>
    );
  }
}
