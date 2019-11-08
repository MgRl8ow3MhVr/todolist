import React, { useState } from "react";

const Form = props => {
  const [newTask, setNewTask] = useState("");
  const { todo, setTodo } = props;

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const temp = [...todo];
        temp.push([newTask, false]);
        setTodo(temp);
        setNewTask("");
      }}
    >
      <input
        type="text"
        value={newTask}
        placeholder="More to do !!"
        onChange={event => {
          setNewTask(event.target.value);
        }}
      ></input>

      <input className="submit" type="submit" value="MORE !"></input>
    </form>
  );
};

export default Form;
