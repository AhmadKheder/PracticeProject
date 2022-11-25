import React from "react";
import { useParams } from "react-router";

function todoDetailes() {
  const { id } = useParams();
  return (
    <div>
      <h1>Todo Detailes {id}</h1>
    </div>
  );
}

export default React.memo(todoDetailes);
