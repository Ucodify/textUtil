import React, { useContext } from "react";
import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
// import { ThemeContext, ThemeProvider } from "./components/ThemeContext";
// import { Dropdown, DropdownButton, Container } from "react-bootstrap";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";

function App() {
  const [mode, setMode] = useState("dark");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // Dark Mode working
//const remooveBodyClasses=()=>{
//document.body.classList.remove('bg-light')
//document.body.classList.remove('bg-dark')
//document.body.classList.remove('bg-warning')
//document.body.classList.remove('bg-danger')
//document.body.classList.remove('bg-success')
//}
  // const toggleMode = (cls) => {
    //removeBodyClasses();
    //console.log(cls);
//document.body.classList.add('bg-' + cls)
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "grey";
  //     showAlert("Dark mode has been enabled", "success");
  //     // document.title = "TextUtils is Amazing - Dark Mode";
  //     setInterval(() => {
  //       document.title = "TextUtils is amazing";
  //     }, 2000);
  //     setInterval(() => {
  //       document.title = "Install TextUtils Now";
  //     }, 1500);
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "success");
  //     document.title = "TextUtils - Light Mode";
  //   }
  // };

  return (
    <>
      <div>
        <Router>
          {/* Dark Mode working */}
          <Navbar
            title='TextUtils'
            aboutText='About'
            mode={mode}
            // toggleMode={toggleMode}
          />

          <Alert alert={alert} />
          {/* <div className='container my-3'>
          <TextForm heading='Enter the text to analyse' showAlert={showAlert} />
          <About /> 
        </div> */}
          <Routes>
            <Route exact path='/about' element={<About mode={mode} />}></Route>
            <Route
              exact
              path='/'
              element={
                <TextForm
                  heading=' TextUtils - Word Counter, Character Counter, Remove extra spaces'
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
