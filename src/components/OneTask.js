import React from "react";

const OneTask = props => {
  const { task, deleteMe, linethroughMe } = props;
  return (
    <div className="onetask">
      <button onClick={deleteMe}>X</button>
      <span onClick={linethroughMe} className={task[1] ? "lined" : "nonlined"}>
        {task[0]}
      </span>
    </div>
  );
};

export default OneTask;
