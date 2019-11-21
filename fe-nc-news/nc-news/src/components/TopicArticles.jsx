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
          <section>
            <div className="Topic">
              <div className="one">One</div>
              <div className="two">Two</div>
              <div className="three">Three</div>
              <div className="four">Four</div>
              <div className="five">Five</div>
              <p id="topic_articles_slug">{slug}</p>
              <p id="topic_articles_desc">{desc}</p>
            </div>
            <ArticleFeeder slug={slug} />
          </section>
        </main>
      </>
    );
  }
}
