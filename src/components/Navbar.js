import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import { Dropdown, DropdownButton, Container } from "react-bootstrap";
import { useContext } from "react";

const ThemeChanger = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Container className='justify-content-end align-items-end d-flex me-5 cursor-pointer'>
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

export default function Navbar(props) {
  return (
    <div>
      {/* Dark Mode working */}
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} bg-${props.mode}`}
      >
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            {props.title}
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  to='/about'
                >
                  {props.aboutText}
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  to='/'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Services
                </Link>
                <ul className='dropdown-menu'>
                  <li>
                    <Link className='dropdown-item' to='/'>
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/'>
                      Software Solutions
                    </Link>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                    Hiring
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ThemeProvider>
              <ThemeChanger />
            </ThemeProvider>

            {/* Dark Mode working */}
            {/* <div>
<div className='bg-primary rounded mx-2' onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px', cursor:'pointer', border:'2px solid black'}}></div>
            </div> 
            <div>
<div className='bg-secondary rounded mx-2' onClick={()=>{props.toggleMode('secondary')}} style={{height:'30px', width:'30px', cursor:'pointer', border:'2px solid black'}}></div>
            </div>
            <div>
<div className='bg-info rounded mx-2' onClick={()=>{props.toggleMode('info')}} style={{height:'30px', width:'30px', cursor:'pointer', border:'2px solid black'}}></div>
            </div>
            <div>
<div className='bg-success rounded mx-2' onClick={()=>{props.toggleMode('success')}} style={{height:'30px', width:'30px', cursor:'pointer', border:'2px solid black'}}></div>
            </div>
            <div>
<div className='bg-warning rounded mx-2' onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', width:'30px', cursor:'pointer', border:'2px solid black'}}></div>
            </div>
            <div>
<div className='bg-danger rounded mx-2' onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', width:'30px', cursor:'pointer', border:'2px solid black'}}></div>
            </div>
            <div>
<div className='bg-light rounded mx-2' onClick={()=>{props.toggleMode('light')}} style={{height:'30px', width:'30px', cursor:'pointer', border:'2px solid black'}}></div>
            </div>
            <div>
<div className='bg-dark rounded mx-2' onClick={()=>{props.toggleMode('dark')}} style={{height:'30px', width:'30px', cursor:'pointer', border:'2px solid black'}}></div>
            </div>
            </div>
            */}
            {/* <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              } me-5 px-5`}
            >
              <input
                className='form-check-input'
                type='checkbox'
                id='flexSwitchCheckDefault'
                onClick={props.toggleMode}
                role='switch'
              />
              <label
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >
                Theme
              </label>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string.isRequired,
// };
// Navbar.defaultProps = {
//   title: "Set title here",
//   aboutText: "About text here",
// };
