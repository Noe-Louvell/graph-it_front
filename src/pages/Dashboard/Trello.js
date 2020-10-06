import React from "react";
import ReactDOM from "react-dom";

import data from "./data.json";
import "./Trello.css";
import Board from "react-trello";

export default function Trello() {
  return (
    <div className="App">
      <h1>TRELLO</h1>
      <Board data={data} draggable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Trello />, rootElement);

