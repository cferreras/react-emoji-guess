import React, { useState } from "react";
import Quesser from "./Quesser";
import db from "../db";
export default function Game() {
  const [item] = useState(db[Math.floor(Math.random() * db.length)]);
  const [solved, setSolved] = useState(false);
  const [completed, setCompleted] = useState(false);

  function showOther() {
    window.location.reload(false);
  }

  function setToSolved() {
    setSolved(true);
    setCompleted(true);
    console.log(true);
  }
  return (
    <div>
      <Quesser item={item} solved={solved} isCompleted={completed} />{" "}
      <div className="flex justify-center space-x-4">
        <div
          onClick={showOther}
          className="   text-center mt-8 px-6 py-2  bg-yellow-400 rounded"
        >
          Mostrar otro
        </div>
        <div
          onClick={setToSolved}
          className="   text-center mt-8 px-6 py-2  bg-green-400 rounded"
        >
          Resolver
        </div>
      </div>
    </div>
  );
}
