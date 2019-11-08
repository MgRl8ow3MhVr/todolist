import React, { useState } from "react";
import "./App.css";
import OneTask from "./components/OneTask";
import Form from "./components/Form";
import FormFilter from "./components/FormFilter";

const App = () => {
  console.log("Load");

  function rotation(element, num) {
    let degres = (Math.random() * 360) / num;
    element.style.transform = `rotate(${degres}deg)`;
  }
  var spans = document.querySelectorAll("span");
  spans.forEach(spanme => {
    setInterval(rotation, 200, spanme, 300);
  });

  const [filter, setFilter] = useState("");
  const [todo, setTodo] = useState([
    ["Do Zis", false],
    ["Do Zat", false],
    ["Hurry Up", false]
  ]);
  // Preparation de la liste des taches

  let todocopy = [...todo];
  todocopy.sort((a, b) => {
    return a[1] - b[1];
  });

  todocopy = todocopy.filter(elem => {
    return elem[0].indexOf(filter) != -1;
  });

  // console.log(todocopy);

  let todolist = [];
  todocopy.forEach(element => {
    todolist.push(
      <OneTask
        key={element[0]}
        task={element}
        // Passage d'une fonction de suppression
        deleteMe={() => {
          const temp = [...todo];
          temp.splice(todo.indexOf(element), 1);
          setTodo(temp);
        }}
        // Passage d'une fonction de modification de l'etat souligne

        linethroughMe={() => {
          const temp = [...todo];
          temp[todo.indexOf(element)][1] = !temp[todo.indexOf(element)][1];
          setTodo(temp);
        }}
      ></OneTask>
    );
  });

  return (
    <div className="App">
      <h1>Do it Do it DO it do IT</h1>
      {todolist}

      <Form todo={todo} setTodo={setTodo}></Form>
      <FormFilter setFilter={setFilter}></FormFilter>
    </div>
  );
};

export default App;
