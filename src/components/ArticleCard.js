import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ArticleCard(props) {
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
      <p
        className="mb-5"
        style={{ width: 500, margin: "auto" }}
      >{`${props.content.substring(0, 200)}...`}</p>
    </div>
  );
}
