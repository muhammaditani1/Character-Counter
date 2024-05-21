import { useState, useRef } from "react";
import "./Counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [mode, setMode] = useState("");
  const sentenceRef = useRef(null);

  function onClickHandler(newMode) {
    setMode(newMode);
    CountCharacters(newMode);
  }

  function CountCharacters(currentMode) {
    let sentence = sentenceRef.current.value;
    let count = 0;
    let spaceCount = 0;
    switch (currentMode) {
      case "include":
        count = sentence.length;
        setCounter(count);
        break;
      case "exclude":
        for (let i = 0; i < sentence.length; i++) {
          if (sentence.charAt(i) === " ") {
            spaceCount += 1;
          }
        }
        count = sentence.length - spaceCount;
        setCounter(count);
        break;
      default:
        setCounter(sentence.length);
    }
  }

  return (
    <div className="counter-body">
      <div className="counter-input">
        <label>Enter the sentence to count characters:</label>
        <input
          ref={sentenceRef}
          type="text"
          onChange={() => CountCharacters(mode)}
        />
        <div className="counter-display">Characters: {counter}</div>
      </div>
      <div className="counter-buttons">
        <button
          className={`include-button ${mode === "include" ? "active" : ""}`}
          onClick={() => onClickHandler("include")}
        >
          Include Space
        </button>
        <button
          className={`exclude-button ${mode === "exclude" ? "active" : ""}`}
          onClick={() => onClickHandler("exclude")}
        >
          Exclude Space
        </button>
      </div>
    </div>
  );
}
