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
    document.getSelection().removeAllRanges(); // To deselect the text
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
        // style={{
        //   color: props.mode === "dark" ? "white" : "black",
        // }}
      >
        <h1 style={{ color: "grey" }}>{props.heading}</h1>
        {/* Dark Mode working */}
        <div className='mb-3'>
          <textarea
            className='form-control'
            value={text}
            id='myBox'
            rows='8'
            onChange={handleOnChange}
            // style={{
            //   backgroundColor: props.mode === "dark" ? "#13466e" : "white",
            //   color: props.mode === "dark" ? "white" : "black",
            // }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className='btn btn-primary m-3'
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary m-3'
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary m-3'
          onClick={handleOnCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary m-3'
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary m-3'
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      {/* Dark Mode working */}
      <div
        className='container my-5'
        // style={{
        //   color: props.mode === "dark" ? "white" : "black",
        // }}
      >
        <h2 style={{ color: "grey" }}>Your Text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
