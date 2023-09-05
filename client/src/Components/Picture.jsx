import React from "react";

function Pictures(props) {
  return (
    <div className={props.style}>
      <h2>{props.name}</h2>
      <img src={props.url} alt={props.name} />
    </div>
  );
}

export default Pictures;
