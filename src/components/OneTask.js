import React from "react";
import { XSquare, ArrowDownLeft, CheckSquare } from "./icons";

const OneTask = props => {
  const { task, deleteMe, linethroughMe } = props;
  return (
    <div className="onetask">
      {/* <button onClick={deleteMe}>X</button> */}
      <div onClick={deleteMe}>
        {task[1] ? (
          <CheckSquare onClick={deleteMe}></CheckSquare>
        ) : (
          <XSquare onClick={deleteMe}></XSquare>
        )}
      </div>

      <span onClick={linethroughMe} className={task[1] ? "lined" : "nonlined"}>
        {task[0]}
      </span>
      {task[1] ? <div></div> : <div className="doit"> Do iT</div>}
      {task[1] ? <div></div> : <div className="now"> NOW!!</div>}
      {task[1] ? (
        <div></div>
      ) : (
        <div className="arrowdown">
          <ArrowDownLeft></ArrowDownLeft>
        </div>
      )}
    </div>
  );
};

export default OneTask;
