import React, { useState } from "react";

export default function Comments(props) {
  const [comment, set_comment] = useState("");

  const onClickCommentSubmit = () => {
    props.submitComment(comment, props.articleId);
    set_comment("");
  };

  return (
    <div>
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
