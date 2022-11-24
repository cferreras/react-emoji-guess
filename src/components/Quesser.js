import React, { useState, useEffect } from "react";
import Letter from "./Letter";
export default function Quesser(props) {
  const data = props.item;

  useEffect(() => {
    if (props.isCompleted) setCompleted(true);
  }, [props.isCompleted]);

  const map = Array.prototype.map;
  const string = data.text;
  let nroAnswers = string.split(" ").join("").split("").length;
  const [completed, setCompleted] = useState(props.isCompleted);

  const letters = map.call(string, (eachLetter) => ({
    letter: eachLetter,
    hidden: true,
  }));

  function handleQuessLetter() {
    nroAnswers--;
    if (nroAnswers < 1) setCompleted(true);
  }

  return (
    <div
      className="container mx-auto px-4 pt-12 max-w-lg focus:outline-none"
      tabIndex="0"
    >
      <h1 className="text-3xl tracking-widest font-extrabold text-white text-center uppercase">
        {data.title}
      </h1>
      <div className="mt-8 p-8 self-center text-center bg-white text-8xl rounded-xl">
        {data.emoji}
      </div>
      <div className="flex justify-center  flex-wrap ">
        {letters.map((letter, index) => (
          <Letter
            solved={props.solved}
            key={index}
            letter={letter.letter}
            hidden={letter.hidden}
            index={index}
            onQuessLetter={handleQuessLetter}
            isCompleted={completed}
          />
        ))}
      </div>
      {completed && (
        <div className="text-xl text-white mt-8 text-center">
          {" "}
          {data?.extra}{" "}
        </div>
      )}
    </div>
  );
}
