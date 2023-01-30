import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HashLink } from "react-router-hash-link";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeContext } from "./../../App";

function NavBarComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <Navbar expand="lg">
      <Navbar.Brand className="mx-3 navbar_brand">Lucky.React()</Navbar.Brand>
      <Navbar.Brand className="mx-3">
        <button className="btn bg-transparent" onClick={toggleTheme}>
          {theme === "dark" ? (
            <Brightness7Icon sx={{ color: "white" }} />
          ) : (
            <Brightness4Icon />
          )}
        </button>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav " className="justify-content-end">
        <Nav className="mx-3">
          <HashLink className="nav_items" to="#about" smooth>
            <Nav.Item>About</Nav.Item>
          </HashLink>
          <HashLink className="nav_items" to="#experience" smooth>
            <Nav.Item>Experience</Nav.Item>
          </HashLink>
          <HashLink className="nav_items" to="#skills" smooth>
            <Nav.Item>Skills</Nav.Item>
          </HashLink>
          <HashLink className="nav_items" to="#contact" smooth>
            <Nav.Item>Contact</Nav.Item>
          </HashLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarComponent;
