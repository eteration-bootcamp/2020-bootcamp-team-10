import React from "react";

export default function Comment(props) {
  // const { name, message, time } = props.comment;
  const name = 'Ahmet';
  const message= 'First massage hello!';
  const time= 'item';
  return (
    <div className="media mb-3">
      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{time}</small>
        <h6 className="mt-0 mb-1 text-muted">{name}</h6>
        {message}
      </div>
    </div>
  );
}
