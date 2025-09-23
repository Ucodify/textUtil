import React, { useContext } from "react";
import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import { ThemeContext, ThemeProvider } from "./components/ThemeContext";
import { Dropdown, DropdownButton, Container } from "react-bootstrap";
// import {
//   Link,
//   createBrowserRouter,
//   Route,
//   Switch,
//   Routes,
// } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import { createRoot } from "react-dom/client";

const ThemeChanger = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Container className='my-5 p-5 border rounded'>
      <h1>Custom Color Palettes</h1>
      <p>Select a theme from the dropdown below:</p>
      <DropdownButton title={`Current Theme: ${theme}`} variant='primary'>
        <Dropdown.Item onClick={() => setTheme("light")}>Light</Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme("dark")}>Dark</Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme("retro")}>Retro</Dropdown.Item>
        <Dropdown.Item onClick={() => setTheme("forest")}>
          Forest
        </Dropdown.Item>{" "}
        {/* New theme */}
        <Dropdown.Item onClick={() => setTheme("candy")}>
          Candy
        </Dropdown.Item>{" "}
        {/* New theme */}
      </DropdownButton>
    </Container>
  );
};
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

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils is Amazing - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <div>
        {/* <Router> */}
          {/* Dark Mode working */}
          <Navbar
            title='TextUtils'
            aboutText='About TextUtils'
            mode={mode}
            toggleMode={toggleMode}
          />

          <ThemeProvider>
            <ThemeChanger />
          </ThemeProvider>
          <Alert alert={alert} />
          <div className='container my-3'>
          <TextForm heading='Enter the text to analyse' showAlert={showAlert} />
          {/* <About /> */}
        </div>
          {/* <Routes>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact
              path='/'
              element={
                <TextForm
                  heading='Enter the text to analyse'
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </Router> */}
      </div>
    </>
  );
}

export default App;
