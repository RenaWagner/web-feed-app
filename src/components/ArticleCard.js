import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ArticleCard(props) {
  const [comment, set_comment] = useState("");

  const onClickIncrementLikes = () => {
    props.incrementLikes(props.articleId);
    // console.log(props.articleId);
  };

  const onClickCommentSubmit = () => {
    props.submitComment(comment, props.articleId);
    set_comment("");
  };

  return (
    <div>
      <img
        src={props.img}
        alt={`${props.title}'s image`}
        style={{ width: 500 }}
      />
      <Link to={`/articles/${props.articleId}`}>
        <h3>{props.title}</h3>
      </Link>
      <p>
        Author: <span className="font-weight-bold">{props.writer}</span> Date:{" "}
        <span className="font-weight-bold">{props.date}</span>
      </p>
      <p>
        <span className="bg-success text-white font-weight-bold p-2">
          Likes: {props.likes}
        </span>{" "}
        <span className="bg-info text-white font-weight-bold p-2">
          Comments: {props.commentsNumber}
        </span>
      </p>
      <p>{`${props.content.substring(0, 200)}...`}</p>
      <button
        className="btn btn-outline-success"
        onClick={onClickIncrementLikes}
      >
        Like
      </button>
      <p>Leave your comments:</p>
      <textarea
        type="text"
        cols="50"
        rows="2"
        value={comment}
        onChange={(event) => set_comment(event.target.value)}
      />
      <p>
        <button className="btn btn-outline-info" onClick={onClickCommentSubmit}>
          Submit
        </button>
      </p>
    </div>
  );
}
