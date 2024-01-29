import React from "react";

function Note(props) {
  return (
    <note>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </note>
  );
}

export default Note;
