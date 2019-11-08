import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// function rotation(element, num) {
//   let degres = (Math.random() * 360) / num;
//   element.style.transform = `rotate(${degres}deg)`;
// }

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// var spans = document.querySelectorAll("span");
// spans.forEach(spanme => {
//   setInterval(rotation, 200, spanme, 100);
// });
