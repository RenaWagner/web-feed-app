import React, { useState } from "react";

export default function AddContent(props) {
  const [addedTitle, set_addedTitle] = useState("");
  const [addedWriter, set_addedWriter] = useState("");
  const [addedContent, set_addedContent] = useState("");
  const [selectedFile, set_selectedFile] = useState("");

  const addContent = () => {
    props.addContent(addedTitle, addedWriter, addedContent, selectedFile);
    set_addedTitle("");
    set_addedWriter("");
    set_addedContent("");
    set_selectedFile("");
  };

  console.log(selectedFile);

  return (
    <div className="p-3 mb-2 bg-warning text-dark">
      <p>Post your article here:</p>
      <form style={{ width: 500, margin: "auto" }}>
        <p>
          Title:{" "}
          <input
            type="text"
            value={addedTitle}
            onChange={(event) => set_addedTitle(event.target.value)}
          />
        </p>
        <p>
          Writer:{" "}
          <input
            type="text"
            value={addedWriter}
            onChange={(event) => set_addedWriter(event.target.value)}
          />
        </p>
        <p>
          Content:{" "}
          <textarea
            type="text"
            cols="50"
            rows="4"
            value={addedContent}
            onChange={(event) => set_addedContent(event.target.value)}
          />
        </p>
        <input
          type="file"
          onChange={(e) => {
            set_selectedFile(URL.createObjectURL(e.target.files[0]));
          }}
        />
      </form>
      <button onClick={addContent}>Submit</button>
    </div>
  );
}
