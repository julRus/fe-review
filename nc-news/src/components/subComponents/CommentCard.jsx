import React from "react";

const CommentCard = props => {
  const { date, author, body, votes } = props;
  return (
    <>
      <li>
        <p>{date}</p>
        <p>{author}</p>
        <p>{body}</p>
        <p>{votes}</p>
      </li>
    </>
  );
};

export default CommentCard;
