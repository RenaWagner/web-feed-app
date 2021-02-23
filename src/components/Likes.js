import React from "react";

export default function Likes(props) {
  const onClickIncrementLikes = () => {
    props.incrementLikes(props.articleId);
    // console.log(props.articleId);
  };

  return (
    <div>
      <p>
        Like this article?{" "}
        <button
          className="btn btn-outline-success"
          onClick={onClickIncrementLikes}
        >
          Like
        </button>
      </p>
    </div>
  );
}
