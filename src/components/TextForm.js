import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //text var, value setText is function to update the text

  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to Lowercase!", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleOnCopy = () => {
    const newText = text;
    setText(newText);
    navigator.clipboard
      .writeText(newText)
      .then(() => {
        console.log(" Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
    props.showAlert(" Text Copied to Clipboard!", "success");
  };

  const handleClearClick = () => {
    console.log("Clear was clicked " + text);
    let newText = " ";
    setText(newText);
    props.showAlert(" Text Cleared!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra spaces removed!", "success");
  };
  return (
    <>
      {" "}
      {/* Dark Mode working */}
      <div
        className='container'
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        {/* Dark Mode working */}
        <div className='mb-3'>
          <textarea
            className='form-control'
            value={text}
            id='myBox'
            rows='8'
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className='btn btn-primary m-3' onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className='btn btn-primary m-3' onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className='btn btn-primary m-3' onClick={handleOnCopy}>
          Copy Text
        </button>
        <button className='btn btn-primary m-3' onClick={handleClearClick}>
          Clear Text
        </button>
        <button className='btn btn-primary m-3' onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      {/* Dark Mode working */}
      <div
        className='container my-5'
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to preview it here"}</p>
      </div>
    </>
  );
}
