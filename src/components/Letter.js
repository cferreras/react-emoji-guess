import React, { useState, useEffect } from "react";

export default function Letter(props) {
  const [isHidden, changeIsHidden] = useState(props.hidden);

  const [isWrong, changeIsWrong] = useState(false);

  useEffect(() => {
    if (props.solved) setToSolved();
  });

  function setToSolved() {
    changeIsHidden(false);
    changeValue(props.letter);
  }

  // const [myDefaultValue, changeDefaultValue] = useState("");
  const [myValue, changeValue] = useState("");

  return props.letter !== " " ? (
    <input
      autoFocus={props.index === 0}
      maxLength="1"
      id={`letter-${props.index}`}
      onChange={onChange}
      // onKeyDown={onChange}
      readOnly={!isHidden}
      // defaultValue={myDefaultValue}
      value={myValue}
      className={
        props.letter === " "
          ? "mt-4 leading-loose  mx-1 text-center  text-lg transition-colors lg:text-xl uppercase font-extrabold text-black bg-transparent w-8 h-8 lg:w-10 lg:h-10 rounded justify-center items-center"
          : isHidden
          ? isWrong
            ? "mt-4 leading-loose  mx-1 text-center  text-lg transition-colors lg:text-xl uppercase font-extrabold text-black bg-red-400 w-8 h-8 lg:w-10 lg:h-10 rounded justify-center items-center"
            : "mt-4 leading-loose  mx-1 text-center  text-lg transition-colors lg:text-xl uppercase font-extrabold text-black bg-white w-8 h-8 lg:w-10 lg:h-10 rounded justify-center items-center"
          : props.isCompleted
          ? "mt-4 leading-loose  mx-1 text-center  text-lg transition-colors lg:text-xl uppercase font-extrabold text-black bg-green-400 w-8 h-8 lg:w-10 lg:h-10 rounded justify-center items-center"
          : "mt-4 leading-loose  mx-1 text-center  text-lg transition-colors lg:text-xl uppercase font-extrabold text-black bg-yellow-400 w-8 h-8 lg:w-10 lg:h-10 rounded justify-center items-center"
      }
    />
  ) : (
    <div className="basis-full" />
  );

  function onChange(e) {
    if (e.target.value[0]?.toLowerCase() === props?.letter[0]?.toLowerCase()) {
      document.getElementById(`letter-${props.index + 1}`)?.focus();

      changeValue(props?.letter[0]?.toLowerCase());
      if (isHidden === true) props.onQuessLetter();
      changeIsHidden(false);
    } else {
      changeValue(e.target.value[0]?.toLowerCase());
      document.getElementById(`letter-${props.index}`)?.value === ""
        ? changeIsWrong(false)
        : changeIsWrong(true);
    }
  }

  // function keyDown(e) {
  //   console.log(e.key);
  //   if (e.key === "Backspace") {
  //     document.getElementById(`letter-${props.index - 1}`)?.focus();
  //   }
  // }
}
