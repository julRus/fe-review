import React from "react";

const ArticleSorter = props => {
  // state = {
  //   created_at: false,
  //   comment_count: false,
  //   votes: false
  // };

  return (
    <form className="dropdown">
      <p className="dropdown_title">SORT</p>
      <label className="dropdown_label">
        DATE
        <input
          className="dropdown_input"
          type="radio"
          name="check"
          value="created_at"
          onChange={event => handleCheck(event.target, props.fetchArticles)}
        />
      </label>{" "}
      <br />
      <label className="dropdown_label">
        Comments
        <input
          className="dropdown_input"
          type="radio"
          name="check"
          value="comment_count"
          onChange={event => handleCheck(event.target, props.fetchArticles)}
        />
      </label>
      <br />
      <label className="dropdown_label">
        Votes
        <input
          className="dropdown_input"
          type="radio"
          name="check"
          value="votes"
          onChange={event => handleCheck(event.target, props.fetchArticles)}
        />
      </label>
    </form>
  );
};

const handleCheck = (target, fetchArticles) => {
  // const checkboxes = target.name;
  // checkboxes.forEach(box => {
  //   if (box !== target) box.checked = false;
  // });
  fetchArticles(target.value);
};

export default ArticleSorter;
